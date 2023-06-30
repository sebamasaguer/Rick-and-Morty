import React, { useState } from 'react';
import styled from './favorites.module.css';
import { connect, useDispatch} from 'react-redux';
import Card from "../card/Card"
import { filterCards,orderCards } from '../../redux/actions';



const Favorites =(props)=> {

    const {myFavorites}= props;
  
    const dispatch = useDispatch();
  const [aux,SetAux] =useState(false);
   
  const handleOrder = (e)=>{
        dispatch(orderCards(e.target.value));
        SetAux(!aux);   
    }
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }
    
 
 return ( <div className={styled.container}> 
<div className={styled.filtros}>
    <h1 className={styled.title}>My Favorites</h1>
    <h3 className={styled.subtitle}>Order by:</h3>
    <select className={styled.select} onChange={handleOrder}>
    <option value="A">Ascendente</option>
    <option value="D">Descendente</option>
    </select>
    <h3 className={styled.subtitle}>Filter by:</h3>
    <select className={styled.select} onChange={handleFilter}>
    <option>All</option>
    <option value="Male">Male</option>
    <option value="Female">Famale</option>
    <option value="Genderless">Genderless</option>
    <option value="unknown">unknown</option>
    </select>
    </div>
    {myFavorites.map((char)=>{
    return (
        <Card 
        key={char.id}
        id={char.id}
        name={char.name}
        status={char.status}
        species={char.species}
        gender={char.gender}
        origin={char.origin.name}
        image={char.image}
        />
    )
 })}
 </div>
 )
};

const mapStateToProps = (state) => {
       return {
         myFavorites: state.myFavorites,
       };
     };
    
export default connect(mapStateToProps,null)(Favorites);
