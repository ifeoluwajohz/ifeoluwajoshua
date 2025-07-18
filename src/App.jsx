import './index.css';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import About from './components/About';

function App() {
    const [isLoadingApp, setIsLoadingApp] = useState(true);

    setTimeout(() => {
      setIsLoadingApp(false);
    }, 6000);

    return (
      <div className="font-josefin">
      <LoadingScreen />
      {!isLoadingApp && 
      
      <Router>
        <Navbar />
        <Intro />
        <About />
        <Projects />
        <p className="text-center mb-4">
          &copy; copyright {new Date().getFullYear()} Isreal Ifeoluwa Joshua
        </p>
    </Router>
      
      
      }
      </div>
    );
}

export default App;
