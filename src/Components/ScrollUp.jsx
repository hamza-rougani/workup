import React from 'react';


function ScrollUp() {
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling animation
  });
}

  return (
    <button id='scrollupbtn' onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <i class='bx bx-chevron-up'></i>
    </button>
  );
}

export default ScrollUp;
