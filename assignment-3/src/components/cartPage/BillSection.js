import React from "react";

const BillSection = () => {
  return (
    <>
      <div className="mx-auto max-w-[480px] overflow-hidden rounded-md border-[1px] p-[1rem] bg-slate-400 mt-[24px]">
        <h4 className="mt-2 mb-8 text-xl font-bold text-center">
          Bill Details
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p>Sub Total</p>
            <p>
              BDT <span className="lws-subtotal">Total</span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p>Discount</p>
            <p>
              BDT <span className="lws-discount">0</span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p>VAT</p>
            <p>
              BDT <span className="vat">0</span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold">TOTAL</p>
            <p className="font-bold">
              BDT <span>Total</span>
            </p>
          </div>
          <button className="mt-[1rem] block w-full rounded bg-green-400 px-[1rem] py-[0.5rem] uppercase text-green-100 hover:bg-green-800">
            place order
          </button>
        </div>
      </div>
    </>
  );
};

export default BillSection;
