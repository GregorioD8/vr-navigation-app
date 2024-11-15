// src/components/Camera.js
import React from 'react';
import { Entity } from 'aframe-react';

const Camera = React.memo(({ isMovingForward }) => (
  <Entity
    id="camera"
    primitive="a-camera"
    wasd-controls-enabled="false" // Disable default WASD movement
    look-controls="pointerLockEnabled: true" // Enable mouse look
    movement={`speed: 0.1; active: ${isMovingForward}`} // movement logic
    // position is set once in useEffect
  />
));

export default Camera;