import React from "react";
import { addToCart, removeToCart, emptyCart } from "../reduxSaga/action";
import { useDispatch } from "react-redux";
import { ProductList } from "../reduxSaga/productListaction";
function Main() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(addToCart());
        }}
      >
        action addToCart
      </button>

      <button
        onClick={() => {
          dispatch(removeToCart());
        }}
      >
        action removeToCart
      </button>

      <button
        onClick={() => {
          dispatch(emptyCart());
        }}
      >
        action emptyCart
      </button>

      <button
        onClick={() => {
          dispatch(ProductList());
        }}
      >
        Product List
      </button>
    </>
  );
}

export default Main;
