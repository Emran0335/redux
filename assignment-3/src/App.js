import { useState } from "react";
import "./App.css";
import CartPage from "./components/CartPage";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [isCartPage, setIsCartPage] = useState(false);
  return (
    <Provider store={store}>
      <Header setIsCartPage={setIsCartPage} />
      <main className="py-16">{!isCartPage ? <Homepage /> : <CartPage />}</main>
    </Provider>
  );
}

export default App;
