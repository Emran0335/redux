import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { book } from "../redux/book/actions";

const InputSection = () => {
  // redux hooks
  const dispatch = useDispatch();
  const books = useSelector((state) => state);

  // form submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const formElement = e.target;
    const formData = {};
    for (let i = 0; i < formElement.elements.length; i++) {
      const element = formElement.elements[i];
      console.log(element.name)
      console.log(element.value)
      if (element.name) {
        formData[element.name] = element.value;
      }
    }

    dispatch(book(formData));
    formElement.reset();
  };
    console.log(books)
  return (
    <>
      <div className="w-full mb-16">
        <div className=" bg-slate-100 w-[90%] mx-auto rounded-md">
          <form
            action=""
            className="flex justify-around flex-wrap"
            onSubmit={submitHandler}
          >
            {/* form  */}
            <div className="p-4 flex flex-col space-y-4 border-r-[2px] text-[12px]">
              <p>Destination Form</p>
              <div>
                <img src="" alt="" />
                <select name="from" id="" required>
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>
            {/* To  */}
            <div className="p-4 flex flex-col space-y-4 border-r-[2px] text-[12px]">
              <p>Destination To</p>
              <div>
                <img src="" alt="" />
                <select name="to" id="" required>
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>
            {/* Date  */}
            <div className="p-4 flex flex-col space-y-4 border-r-[2px] text-[12px]">
              <p>Journey Date</p>
              <input type="date" name ="date" className="outline-none py-2 p-2 rounded-md" required/>
            </div>
            {/* Guests  */}
            <div className="p-4 flex flex-col space-y-4 border-r-[2px] text-[12px]">
              <p>Guests</p>
              <div>
                <img src="" alt="" />
                <select name="guests" id="" required>
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>
            {/* class  */}
            <div className="p-4 flex flex-col space-y-4 border-r-[2px] text-[12px]">
              <p>Class</p>
              <div>
                <img src="" alt="" />
                <select name="ticketClass" id="" required>
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="1">Business</option>
                  <option value="2">Economy</option>
                </select>
              </div>
            </div>
            <button className="space-y-4 text-[12px]" disabled={books.length >=3}>
              {/* svg */}
              <span className="text-sm">Book</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputSection;
