import { PRODUCT_LIST, SET_PRODUCT_LIS } from "./constant";
export const ProductListReducer = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIS:
      console.log(" SET Product List Execute  Reducer", action);

      return [...action.data];

    default:
      return data;
  }
};
