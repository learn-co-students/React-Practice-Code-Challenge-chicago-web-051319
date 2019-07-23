import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super();
    this.state = {
      allSushi: [],
      fourSushi: [],
      money: 100,
      emptyPlate: 0,
      sushiCount: 0,
    }
  }

  componentDidMount(){
    fetch(API)
    .then(r => r.json())
    .then(allSushi => {this.setState({
      allSushi: allSushi,
      fourSushi: allSushi.slice(0,4),
      sushiCount: this.state.sushiCount + 4
    })})
  }

  subtractPrice = (price) => {
    const count = this.state.emptyPlate +1
     this.setState({
       money: this.state.money - price,
       emptyPlate:  count
     })
   }

   handleMore = () => {
     fetch(API)
     .then(r => r.json())
     .then(moreSushi => {this.setState({
       fourSushi: moreSushi.slice(this.state.sushiCount, this.state.sushiCount+4),
       sushiCount: this.state.sushiCount + 4
     })})
   }

  render() {
    return (
      <div className="app">
        <SushiContainer
        money={this.state.money}
        subtractPrice={this.subtractPrice}
        allSushi={this.state.allSushi}
        fourSushi={this.state.fourSushi}
        handleMore={this.handleMore}
        />
        <Table
        money={this.state.money}
        emptyPlate={this.state.emptyPlate}
         />
      </div>
    );
  }
}

export default App;
