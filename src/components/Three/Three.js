import React, { Component } from 'react';
import axios from 'axios';
import './Three.css';


class Three extends Component {
    constructor(props){
        super(props);
        this.state = {
            poke: [{}],
            userInput: '',
            filterPoke: [{}]
        }
        this.filter = this.filter.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        axios.get(`http://pokeapi.co/api/v2/pokemon/`).then(response => {
            this.setState({ 
                poke: response.data.results,
                filterPoke: response.data.results
            })
            // console.log(response.data.results)
        })
    }

    filter(){
        let arr = this.state.poke;
        let val = this.state.userInput;
        let filterArr = [];
        val = val.toLowerCase();
        for(var i = 0; i < arr.length; i++){
            console.log(arr[i].name)
        if(arr[i].name.startsWith(val)){
            filterArr.push(arr[i]);
            console.log(filterArr)
        }
        }
            this.setState({
                filterPoke: filterArr,
            })
    }

  handleInput(str){
     this.setState({
         userInput: str,
        })   
    }

  render() {
    let pokemon = this.state.filterPoke;
    return (
      <div className="three">
          <input onChange={ (e) => this.handleInput(e.target.value) } placeholder="Search Pokemon"/>
          <button onClick={ this.filter } type="button">Search</button>
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