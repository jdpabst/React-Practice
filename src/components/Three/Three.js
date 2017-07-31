import React, { Component } from 'react';
import axios from 'react-router-dom';
import './Three.css';


class Three extends Component {
    constructor(props){
        super(props);
        
    }

    componentWillMount(){
        axios.get('http://pokeapi.co/api/v2/pokemon')
            .then(function(res){
                console.log(res);
            })
            .catch(function(err){
                console.log(err);
            })
    }
  render() {
    return (
      <div className="three">
        
      </div>
    );
  }
}


export default Three;