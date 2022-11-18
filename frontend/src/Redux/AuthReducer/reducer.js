import * as types from "./actionTypes";

const initialState = {
    user:[],
    isLoding:false,
    isError:false

}

export const reducer = (state=initialState, action)=>{
    const{type, payload} = action;

    switch(type){
        default:return state;
    }
}