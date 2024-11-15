// src/shaders.js
import 'aframe';
import * as THREE from 'three';

// Register 'neon-grid' shader only once
if (window.AFRAME && !window.AFRAME.shaders['neon-grid']) {
  window.AFRAME.registerShader('neon-grid', {
    schema: {
      color1: { type: 'color', default: '#00ffff' },
      color2: { type: 'color', default: '#000000' },
      lineWidth: { type: 'number', default: 0.05 },
      gridSpacing: { type: 'number', default: 1.0 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform vec3 color1;
      uniform vec3 color2;
      uniform float lineWidth;
      uniform float gridSpacing;
      void main() {
        vec2 grid = abs(fract(vUv / gridSpacing - 0.5) - 0.5) / fwidth(vUv);
        float line = min(grid.x, grid.y);
        float alpha = 1.0 - smoothstep(lineWidth, lineWidth + 0.01, line);
        vec3 color = mix(color2, color1, alpha);
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });
}

// Register 'movement' component only once
if (window.AFRAME && !window.AFRAME.components['movement']) {
  window.AFRAME.registerComponent('movement', {
    schema: {
      speed: { type: 'number', default: 0.1 },
      active: { type: 'boolean', default: false },
    },

    init: function () {
      this.direction = new THREE.Vector3();
    },

    tick: function (time, timeDelta) {
      if (!this.data.active) return;

      const cameraEl = this.el;
      cameraEl.object3D.getWorldDirection(this.direction);

      this.direction.multiplyScalar(-this.data.speed * (timeDelta / 16.67));

      cameraEl.object3D.position.add(this.direction);
    },
  });
}

