
import { createContext, useContext, useEffect, useReducer, useState } from "react";

export const ContextGlobal = createContext();


const themes = {

  dark: {

      theme: true,
      bgColor: 'black',
      color: 'white'
  },
  light: {

      theme: false,
      bgColor: 'white',
      color: 'black'
  }
}

// const initialState = []
const intialThemeState = themes.light


// export const initialState = 
// {

//   theme: "",
//   data: []
//   }



const themeReducer = (state,action) => {

    switch (action.type){

      case 'DARK': 
        return themes.dark
      case 'LIGHT':
          return themes.light
      default: 
          throw new Error("pud")

    }
}

const url = 'https://jsonplaceholder.typicode.com/users/'

const initialApiState = []
const apiReducer = (state, action) => {

  switch (action.type) {

    case 'GET_DENT':
      return action.payload
    default:
      throw new Error()
  }
}



export const ContextProvider = ({ children }) => {


  const [dentists, dentistsDispatch] = useReducer(apiReducer, initialApiState)

  // const { id } = useParams ()

useEffect(()=>{

  fetch(url)
  .then((response) => response.json())
  .then((data) => dentistsDispatch({type: 'GET_DENT', payload: data }));

  // axios.get(url)
  // .then(res => setDentists(res.data))

}, [])

  const [themeState, themeDispatch] = useReducer(themeReducer, intialThemeState)

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (

    <ContextGlobal.Provider value={{themeState, themeDispatch, themeReducer, dentists}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider
export const useContextGlobal = () => useContext(ContextGlobal)