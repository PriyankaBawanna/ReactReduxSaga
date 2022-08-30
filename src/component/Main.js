import React from "react";
import { addToCart } from "../reduxSaga/action";
import { useDispatch } from "react-redux";
function Main() {
  const dispatch = useDispatch();

  return (
    <>
      <h1>welcome</h1>
      <button
        onClick={() => {
          dispatch(addToCart());
        }}
      >
        action addToCart
      </button>
    </>
  );
}

export default Main;
