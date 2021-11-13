import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import MetaData from "../layout/MetaData";
import "./Home.css";
import ProductCard from "./ProductCard";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <MetaData title="Tech-Store" />
      <div className="banner">
        <p>Welcome to Tech-Store</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        {products &&
          products.map((product) => <ProductCard product={product} />)}
      </div>
    </>
  );
};

export default Home;
