import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">

        {props.sushi.map(s => {
          return <Sushi
            key={s.id}
            id={s.id}
            eaten={s.eaten}
            name={s.name}
            price={s.price}
            image={s.img_url}
            eatSushi={(e)=>{props.eatSushi(e)}}/> })}

      <MoreButton handleClick={props.handleClick}/>
      </div>
    </Fragment>
  )

}

export default SushiContainer
