import {
  All_PRODUCT_REQUEST,
  All_PRODUCT_SUCCESS,
  All_PRODUCT_FAIL,
  CLEAR_ERROS,
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

// Clearing errors
export const clearErros = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROS });
};
