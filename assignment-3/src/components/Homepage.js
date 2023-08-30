import React from "react";
import InputForm from "./productPage/InputForm";
import Product from "./productPage/Product";
import { useSelector } from "react-redux";

const Homepage = () => {
  const products = useSelector((state) => state.products);
  return (
    <>
      <div className="w-full mx-auto px-[0.5rem]">
        <div className="grid gap-2 col-span-2" id="lws-productContainer">
          {products.length >= 1
            ? products.map((item) => <Product key={item.id} product={item} />)
            : "No product found"}
        </div>
        <InputForm />
      </div>
    </>
  );
};

export default Homepage;
