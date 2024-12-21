import './App.css';
import ControlPanel from './components/controlPanel';
import DrumPadContainer from './components/padContainer';
import SwitchButton from './components/UI/switchButton';


function App() {
  return (
    <div 
    className="container" 
    id='drum-machine'>
      <DrumPadContainer padKit={'heater'}/>
      <ControlPanel/>
    </div>
  );
}

export default App;
