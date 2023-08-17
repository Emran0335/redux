import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../redux/book/actions";

const BookList = () => {
  const books = useSelector((state) => state);
  const dispatch = useDispatch();
  const bookDeleteHandler = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <>
      {books.length > 0 && (
        <div className="w-full mb-32">
          <table className=" bg-slate-100 w-[90%] mx-auto rounded-md text-[12px]">
            <thead className="bg-slate-400 h-8 ">
              <tr className="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th className="text-center">Journey Date</th>
                <th className="text-center">Guests </th>
                <th className="text-center">Class </th>
                <th className="text-center">Delete </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300/20">
              {books.map((book) => (
                <tr key={book.id}>
                  <td>
                    <div>
                      <p>{book.from}</p>
                    </div>
                  </td>
                  <td>
                    <p>{book.to}</p>
                  </td>
                  <td>
                    <p>{book.date}</p>
                  </td>
                  <td>
                    <p>{book.guests}</p>
                  </td>
                  <td>
                    <span>{book.ticketClass}</span>
                  </td>
                  <td>
                    <div>
                      <button
                        type="button"
                        onClick={() => bookDeleteHandler(book.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default BookList;
