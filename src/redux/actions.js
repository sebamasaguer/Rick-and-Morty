import { ADD_FAV, REMOVE_FAV } from "./types";

// const addFav = (character) => ({
//   type: ADD_FAV,
//   payload: character,
// });

const removeFav = (id) => ({
  type: REMOVE_FAV,
  payload: id,
});

// Sin return implicito
const addFav = (character) =>{ 
  return ({
  type: ADD_FAV,
  payload: character,
})};

export { addFav, removeFav };