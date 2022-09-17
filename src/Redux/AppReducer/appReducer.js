import {
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS
} from './actionTypes';

const initialState = {
    isLoading : false,
    isError: false,
    products: []
}

export const AppReducer = (state = initialState, action) => {
    switch(action.type){

        case GET_PRODUCTS_REQUEST : {
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        }

        case GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
            };
        }

        case GET_PRODUCTS_ERROR:{
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        }

        default :
            return state;
    }
}