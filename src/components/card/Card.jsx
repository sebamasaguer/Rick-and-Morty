import React from 'react'
import styles from './card.module.css';

export default function Card(props) {
   return (
      <div >
         <button 
            onClick={() => props.onClose(props.id)}
            className='styleButton'
         >X</button>
         <img 
            src={props.image} 
            alt='No se puedo cargar la imagen' 
            width={180} 
            height={180}
           
         />
         <h2 >{props.name}</h2>
         <div>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
      </div>
   );
}