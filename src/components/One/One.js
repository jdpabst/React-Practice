import React, { Component } from 'react';

import './One.css';


class One extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 1234
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(num){
        if(Number(num) || num === ''){
            this.setState({
                name: num
            }, console.log(this.state))
        } else{
            alert('Entry must be numerical');
        }    
    }
  render() {
    return (
      <div className="one">

          <input onChange={ (e) => this.handleInput(e.target.value) } value={ this.state.name }/>

      </div>
    );
  }
}


export default One;