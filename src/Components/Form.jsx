import React, { useState } from "react";


const Form = () => {

  const [userName, setUserName] = useState()
  const [userEmail, setUserEmail] = useState()

  

  

  const handleSubmit = (e) => {
    e.preventDefault()
    
  // console.log(userName)
  // console.log(userEmail)

  
  }
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form onSubmit={ handleSubmit }>
          <label value="name" >Nombre Completo</label>
          <input type="text" name="name" placeholder="Ingresar Nombre Completo" 
          onChange={(e)=> {setUserName(e.target.value)}}/>
          <label value="email">Email</label>
          <input type="email" name="email" placeholder="Ingresa el Email"
          onChange={(e)=> {setUserEmail(e.target.value)}}/>

          <button type="submit" >Ingresar</button>
      </form>
    </div>
  );
};

export default Form;