import React from 'react'
import styled from './card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className={styled.conteiner}>
         <button 
            onClick={() => props.onClose(props.id)}
            className={styled.button}
         >X</button>
        <div className={styled.cont}>
         <img 
            src={props.image} 
            alt='No se puedo cargar la imagen' />
       <div className={styled.id}>{props.id}</div>
       <Link className={styled.Link} to={`/detail/${props.id}`}><h2 >{props.name}</h2></Link>
      
         <div>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
         </div>
      </div>
   );
}