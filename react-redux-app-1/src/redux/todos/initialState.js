const initailState = [
  {
    id: 1,
    text: "Learning React JS",
    completed: true,
  },
  {
    id: 2,
    text: "Learning Redux",
    completed: false,
    color: "red",
  },
];
export default initailState;

/*
const initailState = [
  {
    id: 1,
    text: "Learning React JS",
    completed: true,
    colors: [],
  },
  {
    id: 2,
    text: "Learning Redux",
    completed: false,
    colors: ["red"],
  },
];

// added
const nextTodoId = (todosArr) => {
  const maxId = todosArr.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
  return maxId + 1;
};

const newState = (state) => {
  const text = "ReactJS";
  return [
    ...state,
    {
      id: nextTodoId(state),
      text: text,
    },
  ];
};
console.log("ADDED", newState(initailState));

// toggled
const toggled = (todosArr) => {
  // const payload = 1;
  const payload = 2;
  const newState = todosArr.map((todo) => {
    if (todo.id !== payload) {
      return todo;
    } else {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
  });
  return newState;
};

const toggledResult = toggled(initailState);
console.log("TOGGLED", toggledResult);

// colorselected with filter method
const colorSelected = (todosArr) => {
  const color = "blue";
  const todoId = 2;
  const colorSelectedNew = todosArr.map((todo) => {
    if (todo.id !== todoId) {
      return todo;
    } else {
      return {
        ...todo,
        colors: [...todo.colors, color],
      };
    }
  });
  return colorSelectedNew;
};

const colorResult = colorSelected(initailState);
console.log("COLORSECLTED", colorResult);

// deleted
const deleted = (todosArr) => {
  const todoId = 2;
  return todosArr.filter((todo) => todo.id !== todoId);
};
const deletedResult = deleted(initailState);
console.log("DELETED", deletedResult);

// allcompleted
const allcompleted = (todosArr) => {
  const completedNew = todosArr.map((todo) => {
    return {
      ...todo,
      completed: true,
    };
  });
  return completedNew;
};
const completedResult = allcompleted(initailState);
console.log("COMPLETED", completedResult);

// clearcompleted
const clearCompleted = (todosArr) => {
  return todosArr.filter((todo) => !todo.completed === true);
};

const clearCompletedResult = clearCompleted(initailState)
console.log("CLEARCOMPLETED", clearCompletedResult)

*/
