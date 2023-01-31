import axios from 'axios';
import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETALIS_REQUEST,
    PRODUCT_DETALIS_SUCCESS,
    PRODUCT_DETALIS_FAIL,
    CLEAE_ALL_ERRORS
} from '../constants/Productcon'



// here i use the try and catch to fetch the products
export const getproducts = (keyword="",currentPage=1,price=[0,25000],category,ratings=0) => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST, 
        });
        let link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`

        if(category){
            link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`
        }
        const {data}  = await axios.get(link);
        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data,
        });
    }
    catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};


export const ProductDetred = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETALIS_REQUEST, 
        });
        const {data}  = await axios.get(`http://localhost:4000/api/v1/products/${id}`);
        dispatch({
            type:PRODUCT_DETALIS_SUCCESS,
            payload:data.product,
        });
    }
    catch (error) {
        dispatch({
            type: PRODUCT_DETALIS_FAIL,
            payload: error.response.data.message,
        });
    }
};
export const clearerr = () => async (dispatch) => {
    dispatch({
        type: CLEAE_ALL_ERRORS,
    })
}