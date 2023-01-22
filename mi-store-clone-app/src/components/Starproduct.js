import React from 'react'
import '../style/starpro.css'

const Starproduct = ({ data }) => {
    return (
        <div className='starpro'>
            <div>
                <a href={data[0].url}><img src={data[0].image} alt="1st product" /></a>
            </div>
            <div>
                <a href={data[1].url}><img src={data[1].image} alt="1st product" /></a>
                <a href={data[2].url}><img src={data[2].image} alt="1st product" /></a>
                <a href={data[3].url}><img src={data[3].image} alt="1st product" /></a>
            </div>
        </div>
    )
}

export default Starproduct
