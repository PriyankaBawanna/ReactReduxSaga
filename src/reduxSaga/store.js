import { createStore } from "redux";
//redux store and dummy reducer we inject store in the Provider(index.js )
const dummyReducer = () => {
  return 100;
};
const store = createStore(dummyReducer);

export default store;
