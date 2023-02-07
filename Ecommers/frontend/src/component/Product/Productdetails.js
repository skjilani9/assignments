import React, { useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import './productdet.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearerr, ProductDetred } from '../../actions/Productact'
import { useParams } from 'react-router-dom'
import ReactStar from 'react-rating-stars-component'
import ReviewCard from './ReviewCard.js'
import Loader from '../layout/loading/Loader'
import Meta from '../layout/Metadata/Meta'
import { useAlert } from "react-alert";

const Productdetails = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { product, loading, error } = useSelector((state) => state.product);
    const { id } = useParams();
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearerr());
        }
        dispatch(ProductDetred(id));

    }, [dispatch, id, error,alert]);

    const Option = {
        edit: false,
        color: "glod",
        activecolor: "tomato",
        value: product.ratings,
        isHalf: true,
        size: window.innerWidth < 600 ? 20 : 25,
    }

    return (
        <div>
            {loading ? <Loader /> : (
                <div>
                    <Meta title={`${product.name} --jilani(app)`}/>
                    <div className='productdet'>
                        <div>
                            <Carousel className='photo'>
                                {product.images && product.images.map((item, i) => (
                                    <img src={item.url} key={item.url} alt={`${i} slide`} className='Carouselimage' />
                                ))}
                                {product.images && product.images.map((item, i) => (
                                    <img src={item.url} key={item.url} alt={`${i} slide`} className='Carouselimage' />
                                ))}
                            </Carousel>
                        </div>
                        <div>
                            <div className='databox-1'>
                                <h2>{product.name}</h2>
                                <p>product:{product._id}</p>
                            </div>
                            <div className='databox-2'>
                                <ReactStar {...Option} />
                                <span>({product.numOfReviews} Reviews)</span>
                            </div>
                            <div className='databox-3'>
                                <h1>₹{product.price}</h1>
                                <div className='databox-3-1'>
                                    <div className='databox-3-1-1'>
                                        <button>-</button>
                                        <input type="number" value="1" id='quanty' />
                                        <button>+</button>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                                <p>
                                    Status:{ }
                                    <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                                        {product.Stock < 1 ? "out of stock" : "in stock"}
                                    </b>
                                </p>
                            </div>
                            <div className='databox-4'>
                                Description :<p>{product.description}</p>
                            </div>
                            <button className='review'>submit review</button>
                        </div>
                    </div>
                    <h3 className='reviewhead'>Reviews</h3>
                    {product.reviews && product.reviews[0] ? (
                        <div className='reviewsbox'>
                            {product.reviews && product.reviews.map((reviews) => {
                                return (<ReviewCard reviews={reviews} />)
                            })}
                        </div>
                    ) : (
                        <p className='noreviews'>Reviews not yet</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default Productdetails
