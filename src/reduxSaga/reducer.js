import { ADD_TO_CART } from "./constant";
import { REMOVE_TO_CART } from "./removeCart/constantRemove";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("add to cart execute", action);
      return 1 + 1;

    default:
      console.log("no condition Match ");
      return 0;
  }
};
