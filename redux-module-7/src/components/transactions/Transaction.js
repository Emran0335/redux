import React from "react";
import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";
import { useDispatch } from "react-redux";
import { editActive } from "../../features/transaction/transactionSlice";
import { removeTransaction } from "../../features/transaction/transactionSlice";
import thousandSeparator from "../../utils/thousandSeparator";

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();
  const { id, name, amount, type } = transaction || {};

  const handlEditMode = () => {
    dispatch(editActive(transaction));
  };
  const handleDelete = () => {
    dispatch(removeTransaction(id));
  };
  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>BDT {thousandSeparator(amount)}</p>
        <button className="link" onClick={handlEditMode}>
          <img src={editImg} alt="edit" className="icon" />
        </button>
        <button className="link" onClick={handleDelete}>
          <img src={deleteImg} alt="delete" className="icon" />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
