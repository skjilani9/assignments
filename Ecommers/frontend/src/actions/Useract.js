import { LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    CLEAE_ALL_ERRORS ,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL, 
    LOAD_REQUEST, 
    LOAD_SUCCESS, 
    LOAD_FAIL ,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
} from '../constants/Userconstant'
import axios from 'axios'


// login 
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post("http://localhost:4000/api/v1/login", {
            email,
            password
        }, config)

        dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
};


// register
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_REQUEST });

        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const { data } = await axios.post("http://localhost:4000/api/v1/register",userData, config)

        dispatch({ type: REGISTER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.response.message });
    }
};

// login
export const load = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_REQUEST });


        console.log("hello");
        const { data } = await axios.get("http://localhost:4000/api/v1/me")
        

        dispatch({ type: LOAD_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: LOAD_FAIL, payload: error.response.data.message });
    }
};

// logut
export const logout = () => async (dispatch) => {
    try {

        await axios.get("http://localhost:4000/api/v1/logout")
        

        dispatch({ type: LOGOUT_SUCCESS});
    } catch (error) {
        dispatch({ type:LOGOUT_FAIL, payload: error.response.data.message });
    }
};

// clear
export const clearerr = () => async (dispatch) => {
    dispatch({
        type: CLEAE_ALL_ERRORS,
    })
}

