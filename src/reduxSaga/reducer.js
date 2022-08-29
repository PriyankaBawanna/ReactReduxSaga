import { ADD_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  if (action.type === ADD_TO_CART) {
    console.log("reducer called", action);
    return "abc";
  } else {
    console.log("no action Match ");
    return "no action match";
  }
};
