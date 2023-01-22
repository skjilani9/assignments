import React from 'react'
import '../style/NavCard.css'



const NavCard = ({name,price,image,index}) => {
  return (
    <div className='navcard'>
      <img src={image} alt={`${index} product`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  )
}

export default NavCard
