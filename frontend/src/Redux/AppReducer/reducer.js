import * as types from "./actionTypes";

const initialState = {
    data:[],
    isLoading:false,
    isError:false
};

export const reducer = (state=initialState, action)=>{

    const {type, payload} = action;

    switch(type){

      case types.GET_DATA_REQUEST:
        return {...state, isLoading:true, isError:false};

        case types.GET_DATA_SUCCESS:
            return {...state, isLoading:false, isError:false, data:payload}

            case types.GET_DATA_FAILURE:
                return {...state, isLoading:false, isError:false}

        default : return state;
    }

}