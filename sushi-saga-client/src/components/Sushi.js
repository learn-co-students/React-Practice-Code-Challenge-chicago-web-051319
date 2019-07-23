import React, {Component} from 'react'

class Sushi extends Component {
  state = {
    eaten: this.props.eaten
  }

  eatSushi = () => {
    if (this.state.eaten === false){
      this.setState({eaten: !this.state.eaten})
      this.props.subtractPrice(this.props.sushi.price)
    }
  }

  handleClick = () => {
    return this.props.money < this.props.sushi.price ? alert("NOT SUFFICIENT MONEY") : this.eatSushi()
  }

render(){
  return (
    <div className="sushi">
      <div className="plate"
           onClick={this.handleClick}>
        {
          this.state.eaten ?
            null
          :
            <img src={this.props.sushi.img_url} alt="sushi" width="95%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )
}
}
export default Sushi
