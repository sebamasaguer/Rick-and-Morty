import { ADD_FAV, REMOVE_FAV } from "./types";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  // console.log({state});

  switch (action.type) {
    case ADD_FAV:
      // console.log('payloar', action.payload);
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== Number(action.payload)
        ),
      };
    default:
      return state;
  }
}

export default rootReducer;