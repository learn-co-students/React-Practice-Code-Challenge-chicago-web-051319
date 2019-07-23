import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  function isEaten(sushi){
    return props.eatenSushi.find((piece) => {return piece.id === sushi.id})
  }
  
  function renderAllSushi(){
    return props.displaySushi.map((piece) => { return <Sushi sushi={piece} handleClick={() => {props.handleSushiClick(piece.id, piece.price)}} eaten={isEaten(piece)} key={piece.id}/>})
  }
  
  return (
    <Fragment>
      <div className="belt">
        {renderAllSushi()}
        <MoreButton handleClick={props.handleMoreClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer