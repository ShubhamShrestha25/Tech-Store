import {
  All_PRODUCT_REQUEST,
  All_PRODUCT_SUCCESS,
  All_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";
import axios from "axios";

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: All_PRODUCT_REQUEST });

    const { data } = await axios.get("/api/v1/products");

    dispatch({
      type: All_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: All_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1//product/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing errors
export const clearErros = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
