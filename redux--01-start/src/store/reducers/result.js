import * as actionTypes from "../actions";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.value }),
      };
    case actionTypes.DELETE:
      const updatedArray = state.results.filter((element) => {
        return element.id !== action.position;
      });

      return {
        ...state,
        results: updatedArray,
      };
    default:
      return state;
  }
};

export default reducer;
