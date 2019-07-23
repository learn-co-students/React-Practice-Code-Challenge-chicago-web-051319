import React, { Component } from 'react';
const initialState = {
  money: 0,
  test: ""
}
class  SushiWallet extends Component{
  constructor(props){
    super(props)
    this.state = initialState
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addMoney=(e)=>{
    e.preventDefault()
    this.props.updateBalance(Number(this.state.money))
    this.setState(initialState)
  }
  // <input onChange={this.handleChange} name="test" value={this.state.test}/>

render(){
  return (
      <div>
        <h4>Add Money to ballance</h4>
        <form onSubmit={this.addMoney}>
          <input onChange={this.handleChange} type="number" name="money" value={this.state.money}/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    )
  }
}
export default SushiWallet
