import {
  All_PRODUCT_REQUEST,
  All_PRODUCT_SUCCESS,
  All_PRODUCT_FAIL,
  CLEAR_ERROS,
} from "../constants/productConstants";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case All_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case All_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
      };
    case All_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERROS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};