import { useState } from 'react';
import styles from './searchbar.module.css';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleOnChange = (e) => {
      setId(e.target.value);
   }
   
   return (
      <div
         style={{
            display: 'flex',
            margin:20,
            width: '80%',
            justifyContent: 'end',
            marginRight: 100,
         }}
         >
         <input 
            type='search' 
            placeholder='Buscar...'
            style={{
               border: '0px',
               borderRadius: '5px',
               backgroundColor: 'rgba(255, 228, 196, 0.082)'
            }}
            onChange={handleOnChange}
            id="myInput"
         />
         <button 
            style={{height: 40, borderRadius: 5, marginLeft: 10,backgroundColor:'rgba(255, 228, 196, 0.082)' }}
            onClick={() => onSearch(id)}
            autoFocus
         >
            Agregar
         </button>
      </div>
   );
}
