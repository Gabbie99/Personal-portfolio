import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import Contact from './components/contact/Contact';
import LandingPage from './components/landingPage/LandingPage';
import Projects from './components/projects/Projects';
import Technical from './components/technical/Technical';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <AboutMe/>
      <Technical/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
