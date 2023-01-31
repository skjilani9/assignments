import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, CLEAE_ALL_ERRORS, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAIL ,LOGOUT_SUCCESS,LOGOUT_FAIL} from '../constants/Userconstant'


export const Userreduce = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case LOAD_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,

            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        case LOGOUT_SUCCESS:
            return {
                loading:false,
                user:null,
                isAuthenticated:false,
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload,
            }
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case LOAD_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            }
        case CLEAE_ALL_ERRORS:
            return {
                ...state,
                error: null,
            };


        default:
            return state;
    }
}