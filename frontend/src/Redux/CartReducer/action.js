import * as types from "./actionTypes";
import axios from "axios";

export const getCartData = (token) => (dispatch) => {
  dispatch({ type: types.CART_DATA_REQUEST });

  axios
    .get("https://ecomm-server.onrender.com/cart", {
      headers:{
        "token": "Bearer " + token,
        "Content-type":'application/json'
      },

    })
    .then((res) =>
      dispatch({ type: types.CART_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.CART_DATA_FAILURE }));
};
