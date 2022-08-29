import React from "react";
import { addToCart } from "./reduxSaga/action";
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
    </>
  );
}

export default App;
