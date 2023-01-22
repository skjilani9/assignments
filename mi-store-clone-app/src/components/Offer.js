import React from 'react'
import Offers from './Offers.js'
import '../style/offer.css'

const  Offer = ({off})=> {
  return (
    <div className='offerbox'>
      {off.map((item,index)=>{
        return (<Offers key={item.image} index={index} src={item.image} link={item.url} />)
      })}
    </div>
  )
}

export default Offer
