import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushiArr:[],
    remainingMoney: 100,
    eatenArr:[]
  }


  handleCountEaten = (eatenSushi) => {

    let newMoney = this.state.remainingMoney - eatenSushi.price

    const newEatenArr = this.state.eatenArr
    newEatenArr.push(eatenSushi)
    this.setState({
      eatenArr: newEatenArr,
      remainingMoney: newMoney
    })
  }

 componentDidMount(){
  fetch(API)
  .then(resp => resp.json())
  .then(data =>this.setState({
    sushiArr: data
  }))
 }


  render() {
    return (
      <div className="app">
        <SushiContainer sushiArr={this.state.sushiArr} handleMoney={(val) => this.handleMoney(val)} handleCountEaten={(eatenSushi) => this.handleCountEaten(eatenSushi)} remainingMoney={this.state.remainingMoney}/>
        <Table remainingMoney={this.state.remainingMoney} eatenArr={this.state.eatenArr}/>
      </div>
    );
  }
}

export default App;
