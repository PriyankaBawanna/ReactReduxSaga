import { createStore } from "redux";
//redux store and dummy reducer we inject store in the Provider(index.js )
import rootreducer from "./rootreducer";
const store = createStore(rootreducer);

export default store;
