import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
// import Home from './components/home/Home';
import LandingPage from './components/landingPage/LandingPage';
import Projects from './components/projects/Projects';
// import NavBar from './components/navBar/NavBar';
import Technical from './components/technical/Technical';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <AboutMe/>
      <Technical/>
      <Projects/>
    </div>
  );
}

export default App;
