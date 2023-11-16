import React from "react";
import { useSelector } from "react-redux";
import thousandSeparator from "../utils/thousandSeparator";

const Balance = () => {
  const { transactions } = useSelector((state) => state.transaction);
  const calculateIncome = (transactions) => {
    let income = 0;
    transactions.forEach((transaction) => {
      const { type, amount } = transaction;
      if (type === "income") {
        income += amount;
      } else {
        income -= amount;
      }
    });
    return income;
  };
  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>BDT</span>
        {transactions?.length > 0 ? (
          <span style={{ marginLeft: "8px" }}>
            {thousandSeparator(calculateIncome(transactions))}
          </span>
        ) : (
          0
        )}
      </h3>
    </div>
  );
};

export default Balance;
