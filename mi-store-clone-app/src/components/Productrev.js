import React from 'react'
import Productcard from './Productcard.js'
import '../style/productrev.css'

const Productrev = ({productrevw}) => {
  return (
    <div className='productrev'>
      {productrevw.map((item,index)=>{
            return(<Productcard key={item.image} price={item.price} name={item.name} image={item.image} review={item.review} index={index}/>)
      })}
    </div>
  )
}

export default Productrev
