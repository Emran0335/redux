import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Balance from "./components/Balance";
import Form from "./components/Form";
import Transactions from "./components/transactions/Transactions";

function App() {
  return (
    <Layout>
      <Balance />
      <Form />
      <Transactions />
    </Layout>
  );
}

export default App;
