import React from "react";
import InputForm from "./productPage/InputForm";
import Product from "./productPage/Product";

const Homepage = () => {
  return (
    <>
      <div className="w-full mx-auto px-[0.5rem]">
        <div className="grid gap-2 col-span-2" id="lws-productContainer">
          <Product />
        </div>
        <InputForm />
      </div>
    </>
  );
};

export default Homepage;
