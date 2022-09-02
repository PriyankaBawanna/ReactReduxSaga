import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constant";
export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("add to cart execute", action);
      //return 1 + 1; // this value will be return in header.js when AddToCart operation will called
      //return [action.data]; in this case count of action called not increase so that why next step is follow
      return [action.data, ...data];

    case REMOVE_TO_CART:
      //   data.length = data.length - 1;
      //   console.log("REMOVE_TO_CART reducer execute", action);
      const remainingItem = data.filter((item) => item.id !== action.data);
      console.log("remainingItem ", remainingItem);
      return [remainingItem];

    case EMPTY_CART:
      console.log("EMPTY_CART");
      data = []; //In this case we need to call backend API as well to Empty the

      return [...data];

    default:
      //in the case when no action match console.log("no condition Match ");
      return data;
  }
};
