import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { ProductListReducer } from "./ProductListReducer";
export default combineReducers({
  cartData: cartData,
  ProductListReducer: ProductListReducer,
});
