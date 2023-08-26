const { DINCREMENT, DDECREMENT } = require("./actionTypes");

const dIncrement = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};

const dDecrement = (value) => {
  return {
    type: DDECREMENT,
    payload: value,
  };
};

module.exports = {
  dIncrement,
  dDecrement,
};
