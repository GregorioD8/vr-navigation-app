import React, { useState } from 'react';
import { Scene } from 'aframe-react';
import Camera from './Camera';
import Environment from './Environment';
import Controls from './Controls';

const VRScene = () => {
  const [isMoveForward, setIsMoveForward] = useState(false);

  const toggleMove = () => {
    setIsMoveForward((prev) => !prev); // Toggle forward movement
  };

  const stopMove = () => {
    setIsMoveForward(false); // Stop movement
  };

  return (
    <Scene>
      {/* Camera */}
      <Camera isMoveForward={isMoveForward} />

      {/* Environment */}
      <Environment />

      {/* Controls */}
      <Controls toggleMove={toggleMove} stopMove={stopMove} />
    </Scene>
  );
};

export default VRScene;