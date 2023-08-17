import "./App.css";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import BookList from "./components/BookList";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-blue-200 h-screen w-full">
        <Header />
        <InputSection />
        <BookList />
      </div>
    </Provider>
  );
}

export default App;
