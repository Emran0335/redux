import React from "react";
import imgUrl from "../../assets/cart-shopping-solid.svg";
const Product = () => {
  return (
    <div className="flex max-w-[350px] flex-col justify-between overflow-hidden border-[1px] rounded-md">
      <img src={imgUrl} alt="name" className="mx-auto h-full w-full p-[1rem]" />
      <div className="p-4 space-y-2">
        <h4 className="font-bold">Name</h4>
        <p className="text-lg leading-[1.2rem] text-gray-600">Category</p>
        <div className="flex items-center justify-between pb-2">
          <p className="font-bold">
            BDT <span className="lws-price">Price</span>
          </p>
          <p className="font-bold">
            QTY <span className="lws-quantity">Quantity</span>
          </p>
        </div>
        <button className="mt-[1rem] block w-full rounded-md px-[1rem] bg-green-500 py-[0.5rem] text-gray-100 hover:bg-green-700">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
