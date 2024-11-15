import React, { useState, useCallback } from 'react';
import { Scene } from 'aframe-react';
import Camera from './Camera';
import Environment from './Environment';
import Controls from './Controls';

const VRScene = () => {
  const [isMovingForward, setIsMovingForward] = useState(false);

  const toggleMove = useCallback(() => {
    setIsMovingForward((prev) => !prev); // Toggle forward movement
  }, []);

  const stopMove = useCallback(() => {
    setIsMovingForward(false); // Stop movement
  }, []);

  return (
    <Scene>
      {/* Camera */}
      <Camera isMovingForward={isMovingForward} />

      {/* Environment */}
      <Environment />

      {/* Controls */}
      <Controls toggleMove={toggleMove} stopMove={stopMove} />
    </Scene>
  );
};

export default VRScene;