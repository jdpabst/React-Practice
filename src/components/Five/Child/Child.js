import React, { Component } from 'react';
import axios from 'axios';

import './Child.css';
// Make a parent component. Make a child component. Display the child component twice, but pass different props to each one. Example – parent component could be app.js. child component could be called <Box />. Display it twice, and pass something different down as a prop to each one <Box title=’box1’ /> <Box title=’box2’ />. 

class Child extends Component {

  render() {
    return (
      <div className="child">
          <h2>{this.props.color}</h2>
          <p>{this.props.greet}</p>
      </div>
    );
  }
}


export default Child;