const INITIAL_STATE = {
  color: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      console.log("CHANGE_COLOR : " + action.payload);
      return { ...state, color: action.payload };

    default:
      return state;
  }
};

export default reducer;
