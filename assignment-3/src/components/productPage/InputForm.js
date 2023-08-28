import React from "react";

const InputFrom = () => {
  return (
    <>
      <div className="overflow-hidden border-[1px] rounded-md p-[1rem] m-[1rem] bg-slate-400">
        <h4 className="mt-[0.5rem] mb-[2rem] text-center font-bold leading-[1.75rem]">
          Add New Product
        </h4>
        <form className="space-y-4 text-[#534f4f]" id="lws-addProductForm">
          <div className="space-y-2">
            <label htmlFor="#" className="lws-inputName">
              Product Name
            </label>
            <input
              type="text"
              className="w-full rounded-sm border-[1px] py-[0.25rem] px-[0.5rem] focus:outline-[2px] outline-offset-2"
              id="lws-inputName"
              value="Name"
              required
            />
          </div>
          <div>
            <label htmlFor="#">Category</label>
            <input
              type="text"
              className="w-full rounded-sm border-[1px] py-[0.25rem] px-[0.5rem] focus:outline-[2px] outline-offset-2"
              id="lws-inputCategory"
              value="category"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              type="text"
              className="w-full rounded-sm border-[1px] py-[0.25rem] px-[0.5rem] focus:outline-[2px] outline-offset-2"
              id="lws-inputImage"
              value="imgUrl"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="lws-inputPrice">Price</label>
              <input
                type="number"
                className="w-full rounded-sm border-[1px] py-[0.25rem] px-[0.5rem] focus:outline-[2px] outline-offset-2"
                id="lws-inputPrice"
                value="price"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                type="text"
                className="w-full rounded-sm border-[1px] py-[0.25rem] px-[0.5rem] focus:outline-[2px] outline-offset-2"
                id="lws-inputQuantity"
                value="quantity"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            id="lws-inputSubmit"
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
