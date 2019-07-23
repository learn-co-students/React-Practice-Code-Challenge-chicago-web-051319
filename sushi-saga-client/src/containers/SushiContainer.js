import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

let renderSushi = () => {
   return props.fourSushi.map((sushi) => {

     return < Sushi
     sushi={sushi}
     eaten={false}
     money={props.money}
     subtractPrice={props.subtractPrice}
     handleMore={props.handleMore}
     moreBtnClicked={props.moreBtnClicked}
     key={sushi.id}
     />
   })
 }

  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton handleMore={props.handleMore} />
      </div>
    </Fragment>
  )
}
export default SushiContainer
