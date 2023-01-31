import React from 'react'
import ReactStar from 'react-rating-stars-component'
import Profile from '../../Photos/profile.png'



const ReviewCard = ({ reviews }) => {
    const options = {
        edit: false,
        color: "glod",
        activecolor: "tomato",
        value: reviews.rating,
        isHalf: true,
        size: window.innerWidth < 600 ? 20 : 25,
    }
    return (
        <div>
            <div className='reviewcard'>
                <img src={Profile} alt="user" />
                <p>{reviews.name}</p>
                <ReactStar {...options} />
                <span className="reviewCardComment">{reviews.comment}</span>
            </div>
        </div>
    )
}

export default ReviewCard
