import { ADD_TO_CART } from "./constant";
import { REMOVE_TO_CART, EMPTY_CART } from "./constant";
export const addToCart = (data) => {
  console.log("Action is called ");
  return {
    type: "ADD_TO_CART",
    data,
  };
};
export const removeToCart = (data) => {
  console.log("Action is called remove to cart  ");
  return {
    type: "REMOVE_TO_CART",
    data,
  };
};

export const emptyCart = () => {
  console.log("empty card ");
  return {
    type: "EMPTY_CART",
  };
};
