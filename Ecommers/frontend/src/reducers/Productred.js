import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETALIS_REQUEST,
    PRODUCT_DETALIS_SUCCESS,
    PRODUCT_DETALIS_FAIL,
    CLEAE_ALL_ERRORS
} from '../constants/Productcon'


export const Productred = (state = { product: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.product,
                productcount: action.payload.productcount,
                resultperpage: action.payload.resultperpage,
            };
        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAE_ALL_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};



export const ProductDetred = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETALIS_REQUEST:
            return {
                loading: true,
                ...state,
            };
        case PRODUCT_DETALIS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
                // resultPerPage: action.payload.resultPerPage,
            };
        case PRODUCT_DETALIS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAE_ALL_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};