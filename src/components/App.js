import React from 'react';
import VRScene from './VRScene';
import ErrorBoundary from './ErrorBoundary';
import './App.css'; // Ensure this path is correct

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <VRScene />
      </ErrorBoundary>
    </div>
  );
}

export default App;