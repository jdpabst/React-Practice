import React, { Component } from 'react';
import axios from 'axios';
import './Three.css';


class Three extends Component {
    constructor(props){
        super(props);
        this.state = {
            poke: [{}]
        }
    }

    componentDidMount() {
        axios.get(`http://pokeapi.co/api/v2/pokemon/`).then(response => {
            this.setState({ 
                poke: response.data.results,
            })
            console.log(response.data.results)
        })
    }
  render() {
    let pokemon = this.state.poke;
    return (
      <div className="three">
         { pokemon.map( (poke, id) => {
            return <div key={ id } id="poke_info">
              <p>{ poke.name }</p>
            </div>
        })} 
      </div>
    );
  }
}


export default Three;