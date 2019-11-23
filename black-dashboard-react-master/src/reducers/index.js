const reducer = (
  state = {
    user: [],
    trips: []
  },
  action
) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      };
      case "SET_TRIPS":
        return {
          ...state,
          trips: action.payload
        };
        

    default:
      return state;
  }
};

export default reducer;
