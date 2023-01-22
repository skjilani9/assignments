import React from 'react'
import Hotitemcard from './Hotitemcard.js'
import '../style/HotAcce.css'

const HotAcce = ({music ,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className='hotacc'>
        <div>
            <img src={musicCover || smartDeviceCover || homeCover ||lifeStyleCover || mobileAccessoriesCover} alt="Cover"/>
        </div>
        <div>
            {music && music.map((item,index)=>{
                return(<Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>)
            })}
            {smartDevice && smartDevice.map((item,index)=>{
                return(<Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>)
            })}
            {home && home.map((item,index)=>{
                return(<Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>)
            })}
            {lifeStyle && lifeStyle.map((item,index)=>{
                return(<Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>)
            })}
            {mobileAccessories && mobileAccessories.map((item,index)=>{
                return(<Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>)
            })}

        </div>
      
    </div>
  )
}

export default HotAcce
