import React, { Component } from 'react';
import axios from 'axios';
import Child from './Child/Child';
import './Five.css';
// Make a parent component. Make a child component. Display the child component twice, but pass different props to each one. Example – parent component could be app.js. child component could be called <Box />. Display it twice, and pass something different down as a prop to each one <Box title=’box1’ /> <Box title=’box2’ />. 

class Five extends Component {
  constructor(props){
      super(props);
      this.state = {
        str: 'Hello',
      }
    }


  render() {
    return (
      <div className="five">
          <Child color='blue'/>
          <Child color='green'/>
          <Child greet={ this.state.str }/>
      </div>
    );
  }
}


export default Five;