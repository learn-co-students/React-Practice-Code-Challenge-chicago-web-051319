import React from 'react';

const Sushi = (props) => {

  console.log(props.eaten)
  return (
    <div className="sushi">
      <div className="plate"
        id={props.id}
        onClick={(e)=>{
          e.persist()
          props.eatSushi(e)
        }}>

        {
          props.eaten == false ?
          <img src={props.image} width="100%" alt='sushi pic'/>
          : <img />
        }

      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi
