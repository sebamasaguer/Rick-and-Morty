import React from 'react';
import styled from './form.module.css';
import { validation } from './validation';
// eslint-disable-next-line
//const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export default function Form (props) {
const [userData,setUserData] = React.useState({
    email: '',
    password: ''
})

  const [inputs, setInputs] = React.useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = React.useState({
    email: '', 
    password: ''
  })

  const handleInputChange = (event) =>{
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })

    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
   props.login(userData);
   
}

  return (
<div className={styled.formulario}>
<img className={styled.image}  />
    <div className={styled.form}>
    <form onSubmit={handleSubmit}>
      <hr />
      <label htmlFor="email">Correo Electrónico: </label>
      <input 
      type="text" 
      name="email" 
      placeholder='Escribe tu email...' 
      value={userData.email} 
      onChange={handleInputChange} 
      className={errors.email && styled.warning}>
      </input>
      {errors.email && <p className={styled.danger} >{errors.email}</p>}
     <br />
      
      <label htmlFor="password">Contraseña: </label>
      <input 
      name="password" 
      placeholder='Escribe tu contraseña' 
      type='password' 
      value={userData.password} 
      onChange={handleInputChange} 
      className={errors.password && styled.warning} >
    </input>
      {errors.password && <p className={styled.danger}>{errors.password}</p>}
<br />
      <button type='submit' >Enviar</button>
    </form>
    </div>
    
</div>
  )}