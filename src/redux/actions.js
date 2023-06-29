import { ADD_FAV, REMOVE_FAV,FILTER ,ORDER } from "./types";

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

const filterCards = (gender) =>{ 
  return ({
  type: FILTER,
  payload: gender,
})};

const orderCards = (order) =>{ 
  return ({
  type: ORDER,
  payload: order,
})};

export { addFav, removeFav, filterCards, orderCards};