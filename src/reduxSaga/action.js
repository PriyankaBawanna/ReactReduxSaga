import { ADD_TO_CART } from "./constant";

export const addToCart = () => {
  console.log("Action is called ");
  return {
    type: "ADD_TO_CART",
    data: "1 item",
  };
};
