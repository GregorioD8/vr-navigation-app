
## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **A-Frame**: Web framework for creating VR experiences.
- **aframe-react**: Integration library to use A-Frame within React.
- **Three.js**: 3D library that A-Frame is built upon.
- **ESLint**: Tool for identifying and fixing JavaScript code issues.

## Components Overview

### 1. `App.js`
- **Purpose**: Serves as the root component.
- **Functionality**: Wraps the VR scene within an `ErrorBoundary` to handle any rendering errors gracefully.

### 2. `VRScene.js`
- **Purpose**: Composes the main VR environment.
- **Functionality**: Integrates `Camera`, `Environment`, and `Controls` components within an A-Frame `Scene`.

### 3. `CameraComponent.js`
- **Purpose**: Defines the user's viewpoint in the VR scene.
- **Functionality**: Sets up the A-Frame camera with custom movement logic, disabling default controls and enabling mouse look.

### 4. `EnvironmentComponent.js`
- **Purpose**: Builds the visual environment of the VR scene.
- **Functionality**:
  - **Ground Plane**: Displays a neon grid using a custom shader.
  - **Neon Rings**: Creates multiple torus shapes to simulate a tunnel effect.
  - **Sky**: Adds a solid black sky for immersion.

### 5. `ControlsComponent.js`
- **Purpose**: Manages user interactions for navigation.
- **Functionality**:
  - **Mouse Click**: Toggles forward movement. 
  - **Spacebar Press**: Stops movement.
  - **Event Handling**: Adds and removes event listeners for user inputs.

### 6. `ErrorBoundary.js`
- **Purpose**: Catches and handles JavaScript errors in the component tree.
- **Functionality**:
  - **Error Handling**: Displays a fallback UI when an error occurs.
  - **Logging**: Logs error details to the console for debugging.

### 7. `shaders.js`
- **Purpose**: Registers custom shaders and components with A-Frame.
- **Functionality**:
  - **`neon-grid` Shader**: Creates glowing circles effect for orientation.
interactions.


![VR Navigation App Screenshot](/ScreenshotVR.png)