import React from "react";

import Header from "./component/header";
import { useDispatch } from "react-redux";
import Main from "./component/Main";

function App() {
  const dispatch = useDispatch();
  const product = {
    name: "i Phone",
    category: "mobile",
    price: 10000,
    color: "red",
  };
  return (
    // <div className="App">
    //   <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    // </div>
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
