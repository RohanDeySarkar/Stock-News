import React from 'react';
import './App.css';

import video from './videos/video.mp4';

import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="app">
      <video  
        autoPlay 
        loop 
        muted 
        style={{
          position: "absolute",
          objectFit: "cover",
          height: "100%",
          width: "100%",
          zIndex: "-1",
          opacity: "0.7"
        }}
      >
        <source 
          src={video} 
          type="video/mp4" 
        />
      </video>

      <Header />
      <Body />
    </div>
  );
}

export default App;
