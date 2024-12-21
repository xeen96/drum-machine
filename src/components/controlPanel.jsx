import React from 'react';
import './controlPanel.css'
import PowerButton from './UI/powerButton';
import Display from './UI/display';
import VolumeSlider from './UI/volumeSlider';
import SwitchButton from './UI/switchButton';


const ControlPanel = ({ ...props }) => {
  const { kit, setKit, content, setContent, power, setPower } = props;

  return (
    <div className='control-panel'>
      <PowerButton power={power} setPower={setPower} />
      <Display content={content} />
      <VolumeSlider content={content} setContent={setContent} />
      <SwitchButton kit={kit} setKit={setKit} content={content} setContent={setContent} />
    </div>

  )
}

export default ControlPanel;