import './App.scss';
import About from './components/About/about';
import Availability from './components/availability/availability';
import Main from './components/Main/main';
import Screenshots from './components/screenshots/screenshot';
import { Helmet } from "react-helmet";
import ParticlesThrill from './components/Particles/particles';

const Mainpage = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Thriill</title>
        <meta
          name="description"
          content="Learn music with personalized lessons and expert guidance. Start your musical journey today with our interactive learning platform- Thrill!"
        />
      </Helmet>
      <ParticlesThrill />
      <Main />
      <About />
      <Screenshots />
      <Availability />
    </div>
  );
}

export default Mainpage;
