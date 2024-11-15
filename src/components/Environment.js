import React from 'react';
import { Entity } from 'aframe-react';
import 'aframe'; // Ensure A-Frame is loaded

const Environment = () => {
  return (
    <>
      {/* Ground Plane with Neon Grid */}
      <Entity
        geometry={{ primitive: 'plane', width: 100, height: 100 }}
        rotation="-90 0 0"
        material={{
          shader: 'neon-grid',
          color1: '#00ffff', // Neon cyan
          color2: '#000000', // Background black
          lineWidth: 0.05,
          gridSpacing: 1.0,
        }}
        position="0 0 0"
      />

      {/* Neon Rings to Simulate Tunnel */}
      {[...Array(20)].map((_, i) => (
        <Entity
          key={i}
          geometry={{ primitive: 'torus', radius: 5, radiusTubular: 0.05 }}
          material={{
            color: '#00ffff',
            emissive: '#00ffff',
            emissiveIntensity: 0.5,
          }}
          position={`0 2 ${-10 - i * 10}`}
          rotation="90 0 0"
        />
      ))}

      {/* Sky */}
      <Entity primitive="a-sky" color="#000000" />
    </>
  );
};

export default Environment;