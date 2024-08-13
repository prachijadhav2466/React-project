import React, { useState } from 'react'
import imgOff from "../Assets/bulb_off.jpg"
import imgOn from "../Assets/bulb_on.jpg"


export default function Hello() {
  const[bulbImg,setBulbImg]=useState(imgOff);


  function bulbOn(){

    setBulbImg(imgOn)
  }
  function bulbOff(){
    setBulbImg(imgOff)
  }


  return (
    <div>
    <h1>Bulb Activity</h1>
  
    <button onClick={bulbOn}>On</button>

    <img src={bulbImg}></img>
    <button onClick={bulbOff}>Off</button>
      
    </div>
  )
}