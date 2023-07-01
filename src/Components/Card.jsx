import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import doctor from "../images/doctor.jpg"

const Card = ({ name, username, id }) => {
  const [dentistState, setDentistState] = useState({});
  const url = 'https://jsonplaceholder.typicode.com/users/' + id;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setDentistState(data))
  }, [])

  const addFav = () => {
    let favs = JSON.parse(localStorage.getItem('favs')) || []; 
    // Verificar si el objeto ya existe en el array de favoritos
    const existingFav = favs.find(fav => fav.id === dentistState.id);
    if (!existingFav) {
    const newFavs = [...favs, dentistState];
    localStorage.setItem('favs', JSON.stringify(newFavs));
   
  }else{
    // El objeto ya existe en favoritos, eliminarlo del array y guardar el nuevo array en localStorage
    const newFavs = favs.filter((fav) => fav.id !== dentistState.id);
    localStorage.setItem('favs', JSON.stringify(newFavs));
  }
  }

  let favs = JSON.parse(localStorage.getItem('favs')) || [];

  return (
    <div className="card" key={id}>
        <img style={{width: "180px"}} src={doctor} alt="doctor" />
      <h4>{name}</h4>
      <h4>{username}</h4>
      <h4>{id}</h4>
      <Link to={`/details/${id}`}>
        <h4 style={{ color: 'red' }}>Detail</h4>
      </Link>
      <button onClick={addFav} variant="contained" size="small">
      ⭐su
      </button>
      {favs.length === 0 && <p>No favorites yet.</p>}
    </div>
  );
}

export default Card;