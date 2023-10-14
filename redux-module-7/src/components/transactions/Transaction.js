import React from "react";
import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";
const Transaction = () => {
  return (
    <li className="transaction income">
      <p>Earned this month</p>
      <div className="right">
        <p>BDT 100</p>
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
