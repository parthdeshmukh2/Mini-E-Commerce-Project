import * as types from "./actionTypes";
import axios from "axios";


export const getData = (url) => (dispatch) =>{
    dispatch({type:types.GET_DATA_REQUEST});

    axios.get(url)
    .then((res)=> dispatch({type:types.GET_DATA_SUCCESS, payload:res.data}))
    .catch((err)=> dispatch({type:types.GET_DATA_FAILURE, payload:err}))
}