import React, { useState } from 'react';
import './App.css';
import ControlPanel from './components/controlPanel';
import DrumPadContainer from './components/padContainer';
import { PowerProvider } from './context/powerContext';
import { VolumeProvider } from './context/volumeContext';


function App() {
  const [kit, setKit] = useState("heater");
  const [content, setContent] = useState("");

  return (
    <div className="container" id="drum-machine">
      <PowerProvider>
        <VolumeProvider>
        <DrumPadContainer padKit={kit} setContent={setContent} />
        <ControlPanel
          kit={kit} setKit={setKit}
          content={content} setContent={setContent}/>
          </VolumeProvider>
      </PowerProvider>
    </div>
  );
}

export default App;
