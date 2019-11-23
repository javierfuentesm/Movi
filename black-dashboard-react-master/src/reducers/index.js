const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_INFO':
        return {
          ...state,
          trips: [...state.data, action.payload],

        };
  
      default:
        return state;
    }
  };
  
  export default reducer;