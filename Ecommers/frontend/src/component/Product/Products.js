import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getproducts, clearerr } from '../../actions/Productact'
import Loader from '../layout/loading/Loader'
import Product from '../Home/Product'
import './Product.css'
import { useParams } from 'react-router-dom'
import Pagination from 'react-js-pagination'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'
import Meta from '../layout/Metadata/Meta'
import { useAlert } from "react-alert";

const categories = [
    "moblies",
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
];



const Products = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState([0, 25000])
    const [category, setCategory] = useState("")
    const [ratings, setRatings] = useState([0])
    const { products, loading, productcount, resultperpage, error } = useSelector(state => state.products)

    const { keyword } = useParams();
    const setCurrentPageNo = (e) => {
        setCurrentPage(e)
    };


    const priceHandler = (event, newprice) => {
        setPrice(newprice)
    };

        useEffect(() => {
            if (error) {
                alert.error(error);
                dispatch(clearerr());
            }


            dispatch(getproducts(keyword, currentPage, price, category, ratings));
        }, [dispatch, keyword, currentPage, price, category, ratings,alert, error])


        return (
            <div >
                {loading ? <Loader /> : (
                    <div>
                        <Meta title={"Products ---jilani(app)"} />
                        <h1 className='Producthead'>Products</h1>
                        <div className='productbox'>
                            {products && products.map((product) => {
                                return (<Product product={product} key={product._id} />)
                            })}
                        </div>
                        <div className='filer'>
                            <h2>Filter</h2>
                            <Typography>
                                Price
                            </Typography>
                            <Slider
                                value={price}
                                onChange={priceHandler}
                                valueLabelDisplay="auto"
                                aria-label='range-slider'
                                min={0}
                                max={25000}
                            ></Slider>
                            <Typography>Categories</Typography>
                            <ul className='catbox'>
                                {categories.map((category) => (
                                    <li key={category}
                                        onClick={() => setCategory(category)}
                                        className='categorie'>{category}
                                    </li>
                                ))}
                            </ul>
                            <fieldset>
                                <Typography component="legend">Ratings Above</Typography>
                                <Slider
                                    value={ratings}
                                    onChange={(e, newRating) => {
                                        setRatings(newRating);
                                    }}
                                    aria-labelledby="continuous-slider"
                                    valueLabelDisplay="auto"
                                    min={0}
                                    max={5}
                                />
                            </fieldset>
                        </div>
                        {resultperpage < productcount &&
                            (<div className='page'>
                                <Pagination activePage={currentPage}
                                    itemsCountPerPage={resultperpage}
                                    totalItemsCount={productcount}
                                    onChange={setCurrentPageNo}
                                    nextPageText="Next"
                                    prevPageText="Prev"
                                    firstPageText="1st"
                                    lastPageText="Last"
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    activeClass="pageItemActive"
                                    activeLinkClass="pageLinkActive" />
                            </div>)}
                    </div>
                )}

            </div>
        )
    }

export default Products
