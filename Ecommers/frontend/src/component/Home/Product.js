import React from 'react'
import {Link} from 'react-router-dom'
import Reactstar from 'react-rating-stars-component'

const Product = ({product}) => {
  const Option = {
      edit:false,
      color:"glod",
      activecolor:"tomato",
      value:product.ratings,
      isHalf:true,
      size:window.innerWidth < 600 ? 20 :25,
  }
  return (
    <Link className='product' to={`/product/${product._id}`}>
        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        <div>
            < Reactstar{...Option} /> <span>({product.numOfReviews})</span>
        </div>
        <p className='price'>{`₹${product.price}`}</p>
    </Link>
  );
}

export default Product
