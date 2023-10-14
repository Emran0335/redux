import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  getTransactions,
  editTransaction,
  deleteTransaction,
} from "./transactionAPI";

const initialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchTransactions = createAsyncThunk(
  "transaction/fetchTransactions",
  async () => {
    const transactions = await getTransactions();
    return transactions;
  }
);
export const createTransaction = createAsyncThunk(
  "transaction/createTransaction",
  async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
  }
);

export const changeTransaction = createAsyncThunk(
  "transaction/changeTransaction",
  async ({ id, data }) => {
    // we cannot pass two properties but can pass object of properties
    const transaction = await editTransaction(id, data);
    return transaction;
  }
);

export const removeTransaction = createAsyncThunk(
  "transaction/removeTransaction",
  async (id) => {
    const transaction = await deleteTransaction(id);
    return transaction;
  }
);

// create slice
const transactionSlice = createSlice({
  // foler name is preferred
  name: "transaction",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.transactions = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(createTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(changeTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(changeTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        const indexToUpdate = state.transactions.findIndex(
          (t) => t.id === action.payload.id
        );
        state.transactions[indexToUpdate] = action.payload;
      })
      .addCase(changeTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(removeTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions = state.transactions.filter(
          (t) => t.id !== action.payload
        );
      })
      .addCase(removeTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default transactionSlice.reducer;
