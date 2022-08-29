import React from "react";
import { addToCart } from "./reduxSaga/action";
import { removeToCart } from "./reduxSaga/removeCart/removeAction";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  return (
    <>
      <h1>welcome</h1>
      <button
        onClick={() => {
          dispatch(addToCart()); //this function will call the addToCart action
        }}
      >
        action called
      </button>
      <button
        onClick={() => {
          dispatch(removeToCart());
        }}
      >
        remove to cart
      </button>
    </>
  );
}

export default App;
