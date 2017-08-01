import React, { Component } from 'react';
import ChildOne from './ChildOne/ChildOne';
import ChildTwo from './ChildTwo/ChildTwo';
/* Make a parent component with two children components. This time, do a different component for each of the children. Make it so that clicking a button in one of the children causes something else to happen in the other child. Maybe you could have a variable on state that is a ‘counter’ and clicking the button in one component, and the other component displays the counter, so clicking the button causes the other component’s number to increase  */

import './Six.css';


class Six extends Component {

  render() {
    return (
      <div className="six">
        <ChildOne/>
        <ChildTwo/>
      </div>
    );
  }
}


export default Six;