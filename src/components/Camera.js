import React from 'react';
import { Entity } from 'aframe-react';


const Camera = ({ isMoveForward }) => (
  <>
    <Entity
      id="camera"
      primitive="a-camera"
      wasd-controls-enabled="false" // Disable default WASD movement
      look-controls="pointerLockEnabled: true" // Enable mouse look
      movement={`speed: 0.1; active: ${isMoveForward}`} // movement logic
      position="0 1.6 0" // Initial position
    />
  </>
);

export default Camera;