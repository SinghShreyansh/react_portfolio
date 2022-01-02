import './App.css';
import Contact from './Contact';
import Education from './Education';
import Header from './Header';
import Home from './Home';
import ProjectList from './ProjectList';
import Skills from './Skills';


function App() {
  return (
    
    <div className="App">
    <Header/>
    <div className="AppMain">

    <Home/>
    <ProjectList/>
    <Skills/>
    <Education/>
    <Contact/>
    </div>
    </div>
  );
}

export default App;
