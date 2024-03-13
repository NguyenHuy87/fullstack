import React, {useState, useEffect, useRef} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Player.scss";
import ""


export default function Player() {
  return (
    <div className='player'>
        <audio controls>
            <source src="horse.ogg" type="audio/ogg">
            <source src="horse.mp3" type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>
    </div>
  )
}
