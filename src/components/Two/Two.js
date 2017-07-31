import React, { Component } from 'react';

import './Two.css';


class Two extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        alert('Clicked!')
        console.log('Clicked!')
    }
  render() {
    return (
      <div className="two">
        <button type='button' onClick={ this.handleClick }>Click Me</button>
      </div>
    );
  }
}


export default Two;