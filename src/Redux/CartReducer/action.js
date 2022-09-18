import axios from "axios";
import { ADD_TOCART_FAILURE, ADD_TOCART_REQUEST, ADD_TOCART_SUCCESS, DELETE_FROM_CART, GET_CART_FALIURE, GET_CART_REQUEST, GET_CART_SUCCESS } from "./actionTypes";

export const addtocart = async ( {currentProduct,dispatch}) => {
        console.log(currentProduct)
        dispatch({
            type: ADD_TOCART_REQUEST,
        });
        return axios({
            url: "http://localhost:8080/addtocart",
            method: "post",
            data: currentProduct
        })
        .then((res) => {
        console.log(res.data);
        dispatch({ type: ADD_TOCART_SUCCESS, payload:currentProduct});
        })
        .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_TOCART_FAILURE });
        });
};

export const getCart  = async (dispatch) => {
        dispatch({
          type: GET_CART_REQUEST
        });
        try {
          let res = await axios.get("http://localhost:8080/addtocart");
          let data = await res.data;
          dispatch({
            type: GET_CART_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type: GET_CART_FALIURE
          });
        }
};

export const deleteitem = async (dispatch, id) => {
    console.log(id);
    let res = await axios.delete(`http://localhost:8080/addtocart/${id}`);
    
    dispatch({
        type: DELETE_FROM_CART,
        payload: id,
    });
        
};