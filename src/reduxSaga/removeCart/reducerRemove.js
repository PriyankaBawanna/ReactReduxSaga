import { REMOVE_TO_CART } from "./constantRemove";

export const removeCartData = (data = [], action) => {
  switch (action.type) {
    case REMOVE_TO_CART:
      console.log("REMOVE_TO_CART reducer execute", action);
      return 1 + 1;

    default:
      console.log("no condition Match ");
      return 0;
  }
};
