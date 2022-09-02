import { useEffect } from "react";
import { addToCart, removeToCart, emptyCart } from "../reduxSaga/action";
import { useDispatch, useSelector } from "react-redux";
import { ProductList } from "../reduxSaga/productListaction";
function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.ProductListReducer);
  console.warn("data in main component @PB", data);

  useEffect(() => {
    dispatch(ProductList());
  }, []);

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
      <div className="product-container">
        {data.map((item) => (
          <div className="product-item">
            <img src={item.Photo} alt="" className="img" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>

            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeToCart(item.id))}>
                Remove to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
