import React, {useState} from 'react';
import './App.css';
import ControlPanel from './components/controlPanel';
import DrumPadContainer from './components/padContainer';



function App() {
  const [kit, setKit] = useState("heater");
  const [content, setContent] = useState("none");
  const [power, setPower] = useState(true);

  return (
    <div className="container" id="drum-machine">
      <DrumPadContainer padKit={kit} setContent={setContent}/>
      <ControlPanel kit={kit} setKit={setKit} content={content} setContent={setContent} power={power} setPower={setPower}/>
    </div>
  );
}

export default App;
