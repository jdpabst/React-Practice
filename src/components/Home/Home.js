import React, { Component } from 'react';
import One from './../One/One'
import Two from './../Two/Two'
import Three from './../Three/Three';
import Four from './../Four/Four';
import Five from './../Five/Five';

import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className="home">

        REACT PRACTICE
        <One/>
        <Two/>
        <Three/>
        <Four/>
        <Five/>
      </div>
    );
  }
}


export default Home;