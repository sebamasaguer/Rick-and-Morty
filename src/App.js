import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';


function App() {
  const [Characters, setCharacters] = useState([]);
  function onSearch(id) {
   const repeated = Characters.find((item) => item.id === Number (id))
   if (repeated) return alert('¡Este personaje ya fue agregado!')
   axios(`https://rickandmortyapi.com/api/character/${id}`)
   .then(({ data }) => {
     if (data.name) {
       setCharacters((oldChars) => [...oldChars, data]);
     } else {
       window.alert('¡No hay personajes con este ID!');
     }
   })
   .catch((error) => {
     window.alert('¡No hay personajes con este ID!');
   });
}
const onClose = (id) => {
   setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
 };
   return (
      <div className='App'>
       <Nav onSearch={onSearch}/>
       <Cards characters={Characters} onClose={onClose}/>
      </div>
   );
}

export default App;
