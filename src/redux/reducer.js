import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharaters: []
};

const rootReducer = (state = initialState, action) => {
  // console.log({state});

  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharaters:[...state.allCharaters,action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== Number(action.payload)
        ),
      };
      case FILTER:
        return {
          ...state,
          myFavorites:state.allCharaters.filter((char)=>{
            return char.gender===action.payloads
          })}
      case ORDER:
        return {
          ...state,
          myFavorites:state.allCharaters.sort((a,b)=>{
            return action.payload === 'A'? a.id - b.id : b.id- a.id;
          })}
    default:
      return state;
  }
}

export default rootReducer;