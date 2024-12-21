import React from 'react';
import './controlPanel.css'
import PowerButton from './UI/powerButton';
import Display from './UI/display';
import VolumeSlider from './UI/volumeSlider';
import SwitchButton from './UI/switchButton';


const ControlPanel = () => {


  return (
    <div className='control-panel'>
      <PowerButton/>
      <Display/>
      <VolumeSlider/>
      <SwitchButton/>
    </div>

  )
}

export default ControlPanel;