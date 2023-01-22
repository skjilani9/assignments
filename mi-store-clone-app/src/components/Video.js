import React from 'react'
import Videocard from './Videocard.js'
import '../style/video.css'

const Video = ({vid}) => {
  return (
    <div className='videos'>
      {vid.map((item,index)=>{
        return(<Videocard  key={item.image} index={index} image={item.image} name={item.name}/>)
      })}
    </div>
  )
}

export default Video
