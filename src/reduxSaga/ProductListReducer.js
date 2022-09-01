import { PRODUCT_LIST } from "./constant";
export const ProductListReducer = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      console.log("Product List Execute  Reducer", action);

      return [action.data];

    default:
      return data;
  }
};
