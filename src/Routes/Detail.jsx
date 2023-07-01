// import  { useState } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import axios from "axios"
// import { Link } from 'react-router-dom'
// import { routes } from '../routes'




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [detalle, setDetalle] = useState({})

  let { id } = useParams() 
  console.log(id)

const url = `https://jsonplaceholder.typicode.com/users/${id}`


console.log(url)

useEffect(()=>{

  fetch(url)
  .then(response => response.json())
  .then(data => setDetalle(data))
  


}, [])

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className='detalles'>
    <table style={{width: '100%'}}>
    <tr  >
      <td >Name</td>
      <td >Email</td>
      <td >Phone</td>
      <td >Website</td>
    </tr>
    <tr>
      <td>{detalle.name}</td>
      <td>{detalle.email}</td>
      <td>{detalle.phone}</td>
      <td>{detalle.website}</td>
    </tr>
    </table>

      

    
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail