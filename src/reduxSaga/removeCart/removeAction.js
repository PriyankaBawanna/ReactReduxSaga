import { REMOVE_TO_CART } from "./constantRemove";
export const removeToCart = () => {
  console.log(" Remove Action is called ");
  return {
    type: "REMOVE_TO_CART",
    data: "1 item",
  };
};
