import { PRODUCT_LIST, SET_PRODUCT_LIS } from "./constant";
export const ProductList = () => {
  console.log("Product List Action ");
  return {
    type: "PRODUCT_LIST", //because of this type saga will be understood which function we need to call
  };
};
