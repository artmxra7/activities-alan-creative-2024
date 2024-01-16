// App.jsx
import React, { useState, useEffect } from 'react';
import '../../App.css';
import NavbarB from '../NavbarB';
import BottomNavigation from '../BottomNavigation';
import Example from '../Example';

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <div className="Home">
      {isMobile ? (
        <BottomNavigation />
      ) : (
          <NavbarB />
      )}
    </div>
  );
}

export default Home;
