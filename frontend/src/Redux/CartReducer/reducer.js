import * as types from "./actionTypes";

const initialState = {
  cartData: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { payload, type } = action;


  switch (type) {
    case types.CART_DATA_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.CART_DATA_SUCCESS:
      return { ...state, isLoading: false, isError: false, cartData: payload };

    case types.CART_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
