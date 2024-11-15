import React, { useEffect } from 'react';

const Controls = ({ toggleMove, stopMove }) => {
  useEffect(() => {
    const handleClick = () => {
      toggleMove(); // Toggle forward movement
    };

    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        stopMove(); // Stop movement on spacebar press
      }
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [toggleMove, stopMove]);

  return null; // No UI rendering
};

export default Controls;