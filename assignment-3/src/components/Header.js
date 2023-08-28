/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import imgEmran from "../assets/emran2.png";
import { useSelector } from "react-redux";

const Header = ({setIsCartPage}) => {
    const carts = useSelector(state=>state.carts);
    const cartItem = carts.reduce((totalItem, item)=> item.cartQuantity + totalItem, 0);
  return (
    <>
      <nav className="bg-[#171c2a] py-4">
        <div className="w-full mx-auto flex items-center justify-between px-[0.25rem]">
          <a href="#" onClick={()=> setIsCartPage(false)}>
            <img
              src={imgEmran}
              alt="emran hossain img"
              className="max-w-[80px] rounded-full"
            />
          </a>
          <div className="flex gap-4">
            <a href="#" className="text-[1.25rem] leading-[1.75rem] text-yellow-50" onClick={()=> setIsCartPage(false)}>Home</a>
            <a href="#" className="flex items-center justify-center rounded-full px-[1.5rem] pt-[0.25rem] pb-[0.25rem] bg-[#c15dc1] text-yellow-50 font-semibold" onClick={()=> setIsCartPage(true)}>
              <FontAwesomeIcon className="text-lg" icon={faShoppingBag} />
              <span className="pl-2">{cartItem}</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
