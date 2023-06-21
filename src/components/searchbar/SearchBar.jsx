import { useState } from 'react';
import styled from './searchbar.module.css';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleOnChange = (e) => {
      e.preventDefault();
      onSearch(id)
      setId('');
   }
   function aleatorio(a) {
      return a=Math.round(Math.random()*(824-0)+1);
      }
   return (
      <div className= {styled.cont}>
      <form action="post" method="post" onSubmit={handleOnChange}>
         <input type='search' placeholder='Buscar...' onChange={e=>setId(e.target.value)} value={id}/>
         <button className={styled.boton}>Agregar</button>
      </form>
         <button className={styled.boton}   onClick={() => onSearch(aleatorio(id))}> Random </button>
      </div>
   );
}
