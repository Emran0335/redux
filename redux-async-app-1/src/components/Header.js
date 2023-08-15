import { useState } from "react";
import tickImage from "../images/double-tick.png";
import noteImage from "../images/notes.png";
import plusImage from "../images/plus.png";
import { added, allcompleted, clearcompleted } from "../redux/todos/actions";
import { useDispatch } from "react-redux";

export default function Header() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };
  const completeHandler = () => {
    dispatch(allcompleted());
  };
  const clearCompleteHandler = () => {
    dispatch(clearcompleted());
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitHandler}
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-no-repeat bg-contain"
        >
          <img src={plusImage} alt="todo add icon" />
        </button>
      </form>
      <ul className="flex justify-between my-4 text-xs text-green-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
          <img src={tickImage} alt="complete" className="w-4 h-4" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearCompleteHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
}
