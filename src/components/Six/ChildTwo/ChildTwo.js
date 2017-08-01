import React, { Component } from 'react';

/* Make a parent component with two children components. This time, do a different component for each of the children. Make it so that clicking a button in one of the children causes something else to happen in the other child. Maybe you could have a variable on state that is a ‘counter’ and clicking the button in one component, and the other component displays the counter, so clicking the button causes the other component’s number to increase  */

import './ChildTwo.css';


class ChildTwo extends Component {

  render() {
    return (
      <div className="child_two">
        <button type="button" onClick={ this.props.add }>+1</button>
        <button type="button" onClick={ this.props.sub }>-1</button>
      </div>
    );
  }
}


export default ChildTwo;