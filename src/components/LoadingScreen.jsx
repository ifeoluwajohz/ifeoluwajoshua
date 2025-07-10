import React, { useState, useEffect } from 'react';
import videoSrc from '../assets/intro_video.mp4';
// import '../styles/style.css'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time with a timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-screen">
      {isLoading ? (
        <video className='loading-video' playsInline autoPlay muted loop>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : null}
    </div>
  );
};

export default LoadingScreen;
