import React, { Component } from 'react'
import Table from '../containers/Table';

class Sushi extends Component {

  state={
    eaten: false
  }

handleEaten = () => {
  if (this.props.remainingMoney-this.props.sushi.price>=0){
  this.setState({
    eaten: true
  })
  this.handleTable()}else{null}
}

handleTable = () => {
  this.props.handleCountEaten(this.props.sushi)
}


render(){
  return (
    <div className="sushi">
      <div className="plate"
         onClick={this.handleEaten}>
        { this.state.eaten ? null
          : <img src={this.props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )}
}

export default Sushi
