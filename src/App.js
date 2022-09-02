import React from "react";

import Header from "./component/header";
import { useDispatch } from "react-redux";
import Main from "./component/Main";
import { Routes, Route } from "react-router";
import Cart from "./component/Cart";
function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
