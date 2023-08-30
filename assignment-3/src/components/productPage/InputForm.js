import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/product/actions";

const InputFrom = () => {
  const [input, setInput] = useState({
    name: "",
    category: "",
    imgUrl: "",
    price: "",
    quantity: "",
  });
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(input));
    setInput({
      name: "",
      category: "",
      imgUrl: "",
      price: "",
      quantity: "",
    });
  };

  const inputHandler = (fieldName, e) => {
    if (fieldName === "price" || fieldName === "quantity") {
      setInput({ ...input, [fieldName]: Number(e.target.value) });
    } else {
      setInput({ ...input, [fieldName]: e.target.value });
    }
  };

  return (
    <>
      <div className="overflow-hidden border-[1px] rounded-md p-[1rem] m-[1rem] bg-slate-400">
        <h4 className="mt-[0.5rem] mb-[2rem] text-center font-bold leading-[1.75rem]">
          Add New Product
        </h4>
        <form
          className="space-y-4 text-[#534f4f]"
          id="lws-addProductForm"
          onSubmit={submitHandler}
        >
          <div className="space-y-2">
            <label htmlFor="lws-inputName">
              Product Name
            </label>
            <input
              type="text"
              className="w-full rounded-sm border-[1px] py-[0.25rem] px-[0.5rem] focus:outline-[2px] outline-offset-2"
              value={input?.name}
              onChange={(e) => inputHandler("name", e)}
              required
            />
          </div>
          <div>
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              type="text"
              className="w-full rounded-sm border-[1px] py-[0.25rem] px-[0.5rem] focus:outline-[2px] outline-offset-2"
              value={input?.category}
              onChange={(e) => inputHandler("category", e)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              type="text"
              className="w-full rounded-sm border-[1px] py-[0.25rem] px-[0.5rem] focus:outline-[2px] outline-offset-2"
              value={input?.imgUrl}
              onChange={(e) => inputHandler("imgUrl", e)}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="lws-inputPrice">Price</label>
              <input
                type="number"
                className="w-full rounded-sm border-[1px] py-[0.25rem] px-[0.5rem] focus:outline-[2px] outline-offset-2"
                value={input?.price}
                onChange={(e) => inputHandler("price", e)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                type="number"
                className="w-full rounded-sm border-[1px] py-[0.25rem] px-[0.5rem] focus:outline-[2px] outline-offset-2"
                value={input?.quantity}
                onChange={(e) => inputHandler("quantity", e)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-[1rem] block w-full rounded-lg bg-green-400 px-[1rem] py-[0.5rem] text-yellow-50 hover:bg-green-700"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default InputFrom;
