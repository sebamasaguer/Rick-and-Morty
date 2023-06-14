import React from "react";
import { useState } from 'react';
import SearchBar from "../searchbar/SearchBar";
import styles from "./nav.module.css";
const Nav = ({onSearch}) => {
    const [id, setId] = useState('');

    function aleatorio(a) {
        return a=Math.round(Math.random()*(824-0)+parseInt(0));
        }

    return (
      <div className={styles.container}>
        <SearchBar onSearch={onSearch} />
        <button className={styles.button}
        onClick={() => onSearch(aleatorio(id))}> + 
        </button>
      </div>
    )
  }
  
  export default Nav