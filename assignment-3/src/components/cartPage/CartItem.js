import React from "react";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addCart, deleteCart, removeCart } from "../../redux/cart/actions";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { cartQuantity, name, imgUrl, price, category } = product;
  const total = price * cartQuantity;

  const addToCartHandler = () => {
    dispatch(addCart(product));
  };
  const removeCartHandler = () => {
    dispatch(removeCart(product));
  };
  const deleteHandler = () => {
    dispatch(deleteCart(product));
  };
  return (
    <>
      <div className="grid rounded-sm border-[1px] p-[1rem]">
        <div className="flex items-center col-span-6 space-x-6">
          <img src={imgUrl} alt="" className="max-w-[80%]" />
          <div className="space-y-2">
            <h4 className="font-[0.875rem]">{name}</h4>
            <p className="font-[0.875rem] leading-[1.25] text-opacity-1 text-gray-600">
              {category}
            </p>
            <p className="lws-cartPrice">
              BDT <span className="lws-cartPrice">{price}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          <div className="flex items-center space-x-4">
            <button
              className="lws-incrementQuantity"
              onClick={addToCartHandler}
            >
              <FontAwesomeIcon className="text-lg" icon={faPlus} />
            </button>
            <span className="font-[0.875rem] leading-[1.75rem font-bold">
              {cartQuantity}
            </span>
            <button
              className="lws-decrementQuantity"
              onClick={removeCartHandler}
            >
              <FontAwesomeIcon className="text-lg" icon={faMinus} />
            </button>
          </div>
          <p className="text-lg font-bold">
           BDT <span className="lws-calculatedPrice">{total}</span>
          </p>
        </div>
        <div className="flex items-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button className="lws-removeFromCart" onClick={deleteHandler}>
            <FontAwesomeIcon className="text-lg text-red-400" icon={faTrash} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
