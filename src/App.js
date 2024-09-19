import './App.scss';
import About from './components/About/about';
import Availability from './components/availability/availability';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Screenshots from './components/screenshots/screenshot';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
      <Screenshots/>
      <Availability/>
    </div>
  );
}

export default App;
