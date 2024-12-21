import React from 'react';
import DrumPad from './drumPad';
import './padContainer.css'
import { HEATER_URLS, PIANO_URLS } from '../consts/consts';

const DrumPadContainer = ({...props}) => {
  const {padKit, setContent} = props
  const kit =
  padKit === "heater"
    ? [
        "Heater-1",
        "Heater-2",
        "Heater-3",
        "Heater-4",
        "Clap",
        "Open-HH",
        "Kick-n'Hat",
        "Kick",
        "Closed-HH",
      ]
    : [
        "Chord-1",
        "Chord-2",
        "Chord-3",
        "Shaker",
        "Open-HH",
        "Closed-HH",
        "Punchy-Kick",
        "Side-Stick",
        "Snare",
      ];

  const urls = padKit === "heater" ? HEATER_URLS : PIANO_URLS;
  const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  return (
    <div className="drum-pad-container">
      {kit.map((pad, index) => (
        <DrumPad key={index} pad={pad} keys={keys[index]} effects={urls[index]} setContent={setContent}/>
      ))}
    </div>
  );
};

export default DrumPadContainer;