import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { removeCartData } from "./removeCart/reducerRemove";
export default combineReducers({
  cartData: cartData,
  removeCartData: removeCartData,
});
