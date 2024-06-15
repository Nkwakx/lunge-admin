import React, { useEffect } from 'react';

// ==============================|| NAVIGATION - SCROLL TO TOP ||============================== //

const ScrollTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return children || null;
};

export default ScrollTop;
