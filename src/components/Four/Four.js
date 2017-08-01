import React, { Component } from 'react';
import axios from 'axios';
import './Four.css';
// Conditional rendering. Make an element that has the words ‘this is visible’ inside it, and make a button. When you click the button, the element disappears. When you click the button again, the element re-appears. Lvl2 – have multiple buttons, and each one makes the element look a different way. You could change the words that are inside the element or something.

class Four extends Component {
    constructor(props){
        super(props);
        this.state={
            visible: true,
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickColor = this.handleClickColor.bind(this);
    }

    handleClick(){
        if(this.state.visible){
            document.getElementById('h1').style.display = 'none';
            this.setState({
                visible: false,
            })
        } else {
            document.getElementById('h1').style.display = 'block';
            this.setState({
                visible: true,
            })
        }
    }
    handleClickColor(){
        if(!this.state.clicked){
            document.getElementById('h1').style.background = 'lightpink';
            document.getElementById('h1').style.borderColor = 'lightslategray';
            document.getElementById('words').style.color = 'white';
            document.getElementById('words').textContent = 'Color Change!'
            this.setState({
                clicked: true,
            })
        } else {
            document.getElementById('h1').style.background = 'lightgray';
            document.getElementById('h1').style.borderColor = 'darkgray';
            document.getElementById('words').style.color = 'lightseagreen';
            document.getElementById('words').textContent = 'This is visible'
            this.setState({
                clicked: false,
            })
        }
    }

  render() {
    return (
      <div className="four">
          <div id="h1">
            <h1 id='words'>This is visible</h1>
          </div>
          <br/>
          <button id='one' onClick={ this.handleClick } type="button">Click Me</button>
          <button id='two' onClick={ this.handleClickColor } type="button">Click Me Too</button>
      </div>
    );
  }
}


export default Four;