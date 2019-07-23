import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
  state={
    startNum: 0
  }

  handleMore = () => {
    let currentNum = this.state.startNum
    this.setState({
      startNum: currentNum + 4
    })
  }


  render(){
  const {startNum } = this.state
  return (
      <div className="belt">
      {this.props.sushiArr.slice(startNum, startNum +4).map((sushi) => <Sushi key={sushi.id} sushi={sushi} handleMoney={(val) =>this.props.handleMoney(val)} handleCountEaten={(eatenSushi) => this.props.handleCountEaten(eatenSushi)} remainingMoney={this.props.remainingMoney}/>)}
      <MoreButton handleMore={this.handleMore}/>
      </div>

  )}
}

export default SushiContainer
