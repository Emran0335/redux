import React from "react";
import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";
const Transaction = ({ transaction }) => {
  const { name, amount, type } = transaction || {};
  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>BDT {amount}</p>
        <button className="link">
          <img src={editImg} alt="edit" className="icon" />
        </button>
        <button className="link">
          <img src={deleteImg} alt="delete" className="icon" />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
