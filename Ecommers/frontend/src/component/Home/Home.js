import React, { useEffect } from 'react'
import { CgMouse } from 'react-icons/cg'
import './Home.css'
import Product from './Product.js'
import Metadata from '../layout/Metadata/Meta'
import { getproducts,clearerr } from '../../actions/Productact'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../layout/loading/Loader'
import { useAlert } from "react-alert";



const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products)
    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch(clearerr());
        }
        dispatch(getproducts());
    }, [dispatch,error,alert]);
    return (
        <div>
            {loading ? <Loader />: <div>
                <Metadata title="Home page" />
                <div className='logocon'>
                    <p>welcome to the home page</p>
                    <h1>Find the best products below</h1>
                    <a href="#container">
                        <button>
                            scroll{<CgMouse />}
                        </button>
                    </a>
                </div>
                <h2 className='head'>Freacture products</h2>
                <div className='container' id='container'>
                    {products && products.map((product) =>
                        (<Product product={product} />)
                    )}
                </div>
            </ div>}
        </div>
    )
}

export default Home
