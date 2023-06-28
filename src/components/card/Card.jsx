import React from 'react'
import styled from './card.module.css';
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";



function Card(props) {
   const {
     id,
     image,
     name,
     species,
     gender,
     origin,
     onClose,
     // si quiero usar redux sin hook descomentar estas 3 lineas
     // removeFav,
     // addFav,
     // myFavorites,
   } = props;
 
   // si quiero usar redux sin hook comentar estas dos lineas de codigo
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites);
 
   console.log({myFavorites});
   const [isFav, setIsFav] = useState(false);
 
   const handleFavorite = () => {
     if (isFav) {
       dispatch(removeFav(id));
       setIsFav(false);
     } else {
       const data = {
         id,
         image,
         name,
         species,
         origin,
         gender
       }
       dispatch(addFav(data));
       setIsFav(true);
     }
   };
 
   useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);
   return (
      <div className={styled.conteiner}>
         {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
        
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
export default Card;