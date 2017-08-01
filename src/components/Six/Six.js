import React, { Component } from 'react';
import ChildOne from './ChildOne/ChildOne';
import ChildTwo from './ChildTwo/ChildTwo';
/* Make a parent component with two children components. This time, do a different component for each of the children. Make it so that clicking a button in one of the children causes something else to happen in the other child. Maybe you could have a variable on state that is a ‘counter’ and clicking the button in one component, and the other component displays the counter, so clicking the button causes the other component’s number to increase  */

import './Six.css';

class Six extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
        this.countDown = this.countDown.bind(this);
        this.countUp = this.countUp.bind(this);
    }
    
    countUp(num){
        num = this.state.counter;
        num += 1;
        this.setState({
            counter: num
        })
    }
    countDown(num){
        num = this.state.counter;
        num -= 1;
        this.setState({
            counter: num
        })
    }


  render() {
    return (
      <div className="six">
        <ChildOne start = { this.state.counter }/>
        <ChildTwo add={ this.countUp } sub={ this.countDown }/>
      </div>
    );
  }
}


export default Six;