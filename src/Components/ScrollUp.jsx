import React, { useEffect, useState } from 'react';

function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  // Add event listener to window when component mounts
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Only run once when component mounts

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      id='scrollUpBtn'
      onClick={scrollToTop}
      style={{
        display: isVisible ? 'flex' : 'none',

      }}
    >
      <i className='bx bx-chevron-up'></i>
    </button>
  );
}

export default ScrollUp;
