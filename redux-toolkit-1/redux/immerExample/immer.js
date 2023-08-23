const { createStore } = require("redux");
const { produce } = require("immer");

const initialState = {
  name: "Learn Redux JS",
  address: {
    district: "Munshiganj",
    city: "Dhaka",
    country: "Bangladesh",
  },
};

// action creator
const updatedDistrict = (district) => {
  return {
    type: "district_updated",
    payload: district,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "district_updated":
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       district: action.payload,
      //     },
      //   };
      return produce(state, (draftState) => {
        draftState.address.district = action.payload;
      });
    default:
      return state;
  }
};

// createStore
const store = createStore(reducer);

// ui update
store.subscribe(() => {
  console.log(store.getState());
});

// action dispatch
store.dispatch(updatedDistrict("Gulshan"));

// node redux/immerExample/immer.js