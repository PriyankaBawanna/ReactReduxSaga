import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.warn("@data redux data in header", result); //result wil be return value of AddToCart in reducer.js
  console.warn("data in header", result);
  return (
    <div className="header">
      <Link to="/">home page</Link>
      <Link to="/Cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
