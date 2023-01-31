import React from 'react'
import play from '../../../Photos/google-play.png'
import app from '../../../Photos/app-store.png'
import './foot.css'

const Foot = () => {
  return (
    <footer id='foot'>
        <div className='one'>
            <p>Download our app from playstote and app store</p>
            <img src={play} alt="play store" />
            <img src={app} alt="app store" />

        </div>
        <div className='two'>
            <h2>ECOMMERCE.</h2>
            <p>High Quality and Good Products is our first priority</p>
            <p>Copyrights 2021 &copy; Jilani</p>
        </div>
        <div className='three'>
            <h4>Fllow us</h4>
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Linkedin</a>
        </div>
    </footer>
  )
}

export default Foot
