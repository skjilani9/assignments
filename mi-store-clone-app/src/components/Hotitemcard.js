import React from 'react'
import '../style/Hotitemcard.css'

const Hotitemcard = ({ image, price, name, index }) => {
    return (
        <div className='itemslink'>
            <img src={image} alt={`${index} product`} />
            <p>{name}</p>
            <span>{price}</span>

        </div>
    )
}

export default Hotitemcard
