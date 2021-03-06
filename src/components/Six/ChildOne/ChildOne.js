import React, { Component } from 'react';

/* Make a parent component with two children components. This time, do a different component for each of the children. Make it so that clicking a button in one of the children causes something else to happen in the other child. Maybe you could have a variable on state that is a ‘counter’ and clicking the button in one component, and the other component displays the counter, so clicking the button causes the other component’s number to increase  */

import './ChildOne.css';


class ChildOne extends Component {

  render() {
    return (
      <div className="child_one">
        <div>{ this.props.start }</div>
      </div>
    );
  }
}


export default ChildOne;