import './index.css';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
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

      <div className="App">
      <LoadingScreen />
      {!isLoadingApp && 
      
      <Router>
        <Navbar />
        <Intro />
        <div className="flex justify-between mt-16">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
          >
              About Me
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
          >
            Projects & Experiences
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <p className="text-center mb-4">
          &copy; copyright {new Date().getFullYear()} Isreal Ifeoluwa Joshua
        </p>
    </Router>
      
      
      }
      </div>
    );
}

export default App;
