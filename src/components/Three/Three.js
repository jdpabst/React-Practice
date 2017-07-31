import React, { Component } from 'react';
import axios from 'react-router-dom';
import './Three.css';


class Three extends Component {
    constructor(props){
        super(props);
        this.state = {
            poke: {}
        }
    }

    componentDidMount() {
        axios.get(`http://pokeapi.co/api/v2/pokemon`)
        .then(response => this.setState(
            { 
                poke: response.data
            }))
    }
  render() {
    return (
      <div className="three">
        
      </div>
    );
  }
}


export default Three;