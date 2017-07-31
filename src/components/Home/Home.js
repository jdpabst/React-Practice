import React, { Component } from 'react';
import One from './../One/One'
import Two from './../Two/Two'
import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className="home">

        REACT PRACTICE
        <One/>
        <Two/>
      </div>
    );
  }
}


export default Home;