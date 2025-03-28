import './App.scss';
import About from './components/About/about';
import Availability from './components/availability/availability';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Screenshots from './components/screenshots/screenshot';
import PrivacyPolicy from './components/PrivacyPolicy/privacyPolicy';
import ParticlesThrill from './components/Particles/particles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ParticlesThrill />
                <Main />
                <About />
                <Screenshots />
                <Availability />
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

