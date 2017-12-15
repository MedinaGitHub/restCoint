import { combineReducers } from "redux";
//formReducer es la funcion que toma el estado anterior del formulario y lo actualiza.
function mainReducer(
  state = {
    value: {}
  },
  action
) {
  switch (action.type) {

    case "SET_VALUE":

      return {
        ...state,
        value: action.value
      };

    default:
      return state;
  }
}

const reducer = combineReducers({
  main: mainReducer
});

export default reducer;
