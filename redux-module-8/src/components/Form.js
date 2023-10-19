import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTransaction,
  createTransaction,
} from "../features/transaction/transactionSlice";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  // to do ui transaction change
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  // just to show error
  const { isLoading, isError } =
    useSelector((state) => state.transaction) || {};

  const { editing } = useSelector((state) => state.transaction);

  const reset = () => {
    setName("");
    setType("");
    setAmount("");
  };

  // listen for editMode active
  useEffect(() => {
    const { id, name, type, amount } = editing || {};
    if (id) {
      setEditMode(true);
      setName(name);
      setType(type);
      setAmount(amount);
    } else {
      setEditMode(false);
      reset();
    }
  }, [editing]);

  // to change editMode
  const cancelEditMode = () => {
    reset();
    setEditMode(false);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(
      createTransaction({
        name: name,
        type: type,
        amount: Number(amount),
      })
    );
    reset();
    // reset function can do the same as the below do
    //setName("");
    //setType("");
    //setAmount("");
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      changeTransaction({
        id: editing.id,
        data: {
          name: name,
          type: type,
          amount: amount,
        },
      })
    );
    setEditMode(false);
    reset();
  };
  return (
    <div className="form">
      <h3>Add new transaction</h3>
      <form onSubmit={editMode ? handleUpdate : handleCreate}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            required
            name="name"
            value={name}
            placeholder="enter title"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group radio">
          <label>Type</label>
          <div className="radio_group">
            <input
              type="radio"
              required
              value="income"
              name="type"
              checked={type === "income"}
              onChange={(e) => setType("income")}
            />
            <label>Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              checked={type === "expense"}
              onChange={(e) => setType("expense")}
            />
            <label>Expense</label>
          </div>
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            required
            placeholder="enter amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button disabled={isLoading} className="btn" type="submit">
          {editMode ? "Update Transaction" : "Add Transaction"}
        </button>
        {!isLoading && isError && (
          <p className="error">There was an error occured!</p>
        )}
      </form>
      {editMode && (
        <button className="btn cancel_edit" onClick={cancelEditMode}>
          Cancel Edit
        </button>
      )}
    </div>
  );
};

export default Form;
