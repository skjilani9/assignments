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
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    // UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL,
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


        const { data } = await axios.get("/api/v1/me")
        

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

// Update profile
export const updateprof = (userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const { data } = await axios.put("/api/v1/me/update",userData, config ,err=>{
            if(err){
                console.log(err)
            }
        })

        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({ type: UPDATE_PROFILE_FAIL, payload: error.response.message });
    }
};

// clear
export const clearerr = () => async (dispatch) => {
    dispatch({
        type: CLEAE_ALL_ERRORS,
    })
}

