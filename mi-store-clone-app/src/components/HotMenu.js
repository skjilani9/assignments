import React from 'react'
import {Link} from 'react-router-dom'
import "../style/hotmenu.css"

const HotMenu = () => {
  return (
    <div className='hotmenu'>
      <Link className='hotmenulink' to='/music'>Music</Link>
      <Link className='hotmenulink' to='/smartDevice'>SmartDevice</Link>
      <Link className='hotmenulink' to='/home'>Home</Link>
      <Link className='hotmenulink' to='/lifeStyle'>LifeStyle</Link>
      <Link className='hotmenulink' to='/mobileAccessories'>Mobile Accessories</Link>
    </div>
  )
}

export default HotMenu
