import rootreducer from "./rootreducer";
import { configureStore } from "@reduxjs/toolkit";
import ProductSaga from "./ProductSaga";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootreducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(ProductSaga);

export default store;
