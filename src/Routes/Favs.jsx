import React from "react";
import doctor from "../images/doctor.jpg"
import { Link } from "react-router-dom";

// import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  let favs = localStorage.getItem('favs')
  let parsedFavs = JSON.parse(favs)

  const sacarFavorito = () => {
    console.log(favs.id)
  }
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      
        {/* <div className="card"> */}
      {parsedFavs.map(dentis => (
        
           <div className="card" key={dentis.id}>
            <img style={{width: "180px"}} src={doctor} alt="doctor" />
           <h2>{dentis.id}</h2>
           <h2>{dentis.name}</h2>
           <h2>{dentis.username}</h2>
           <button onClick={sacarFavorito}></button>
           <Link to={`/details/${dentis.id}`}>
        <h4 style={{ color: 'red' }}>Detail</h4>
      </Link>
         
      </div>
            
       ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      {/* </div> */}
      
      </div> 
    
    </>
  );
};

export default Favs;
