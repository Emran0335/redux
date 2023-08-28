import React from "react";
import CartItem from "../components/cartPage/CartItem";
import BillSection from "../components/cartPage/BillSection";

const CartPage = () => {
  return (
    <>
      <div className="w-full 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="w-full mx-auto grid gap-2 py-[0.5rem]">
          <div className="space-y-6">
            <CartItem />
            You have no Product in cart
          </div>
          <div>
            <BillSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
