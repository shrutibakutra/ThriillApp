const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Define the routes you want to prerender
const routes = [
  '/',               
  '/features',          
  '/screenshots',
  '/download',
  '/contact'
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `https://shrutibakutra.github.io/ThriillApp${route}`; // Replace with your local development server
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Create a file for each route's HTML content
    const html = await page.content();
    const fileName = route === '/' ? 'index.html' : `${route.replace('/', '')}.html`;
    const outputPath = path.join(__dirname, 'build', fileName);

    // Ensure the build directory exists
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    // Write the HTML content to the appropriate file
    fs.writeFileSync(outputPath, html, 'utf8');

    console.log(`✅ Prerendered ${url} -> ${outputPath}`);
  }

  await browser.close();
})();
