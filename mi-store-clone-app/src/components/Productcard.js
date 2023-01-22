import React from 'react'
import '../style/Productcard.css'

const Productcard = ({name,price,image,review,index}) => {
  return (
    <div className='productrevlink'>
      <img src={image} alt={`${index} product`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  )
}

export default Productcard
