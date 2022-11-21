import axios from "axios";

import * as types from "./actionTypes";


export const userLogin = (body, navigate, lastLocation) => (dispatch)=>{

      dispatch({type:types.GET_LOGIN_REQUEST});
           
    //   console.log("Checked")
     axios.post("http://localhost:8080/user/login", body)
     .then((res)=> {
        // console.log(res.data);
         // alert("Login SuccessFull");
       
        dispatch({type:types.GET_LOGIN_SUCCESS, payload:res.data})
        alert("Login SuccessFull");
        navigate(lastLocation, {replace:true});
       
        
     })
     .catch((err)=>{
        dispatch({type:types.GET_LOGIN_FAILURE})
        console.log(err);
     })

}