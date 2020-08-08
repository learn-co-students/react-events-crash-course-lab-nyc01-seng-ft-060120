import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (e) => {
    let x = e.clientX
    let y = e.clientY

    drawChromeBoiAtCoords(x,y)
  }
  
  clickCanvas = (e) => {
    toggleCycling()
  }
   
  keyPressHandler = (e) =>{
    console.log("in key press func", e.key)
    if (e.key === "a"){
      resize('+')
    } else if (e.key === "s"){
      resize('-')
    }
  }
 
  
  render() {
    return (
      <canvas 
        onKeyPress={this.keyPressHandler}
        onClick={this.clickCanvas}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}


