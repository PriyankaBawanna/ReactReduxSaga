import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIS } from "./constant";

function* getProduct() {
  console.log("Api call here "); //whenever we create generator function we need to at least one yield
  let data = yield fetch("http://localhost:3500/product");
  data = yield data.json();

  yield put({ type: SET_PRODUCT_LIS, data }); //this function is use to send data SET_PRODUCT_LIST Action
}

function* ProductSaga() {
  yield takeEvery(PRODUCT_LIST, getProduct); // first parameter - when to call , second parameter what to perform
}
export default ProductSaga;
