const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;
const regexPassword =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

export function validation(userData){
let errors= {};

if(!regexEmail.test(userData.email))errors.email='El usaurio debe ser un email';
else if(!userData.email)errors.email='El usuario no puede esta vacio';
else if (userData.email.length>35)errors.email='El uusario no puede tener mas de 35 caracteres';
if(!regexPassword.test(userData.password)) errors.password='La contraseña debe tener al menos un numero';
return errors;
}