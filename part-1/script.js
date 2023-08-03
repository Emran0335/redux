// if it is Id querySelector takes '#', if it is getElementById, it does not take '#' sign.

const counterState = document.querySelector("#counter");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");

// initial state

let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  counterState.innerHTML = count;
});
decrementBtn.addEventListener("click", () => {
  count--;
  counterState.innerHTML = count
});
