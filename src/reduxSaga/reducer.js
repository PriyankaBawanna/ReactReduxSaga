import { ADD_TO_CART } from "./constant";
import { REMOVE_TO_CART } from "./removeCart/constantRemove";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("add to cart execute", action);
      //return 1 + 1; // this value will be return in header.js when AddToCart operation will called
      //return [action.data]; in this case count of action called not increase so that why next step is follow
      return [action.data, ...data];
    default:
      //in the case when no action match console.log("no condition Match ");
      return data;
  }
};
