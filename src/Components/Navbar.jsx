
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import { useContextGlobal } from './utils/global.context'




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeState, themeDispatch } = useContextGlobal()

  // console.log(themeDispatch)
  // console.log(themeState)

  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type:'LIGHT'})
    }else{
      themeDispatch({type:'DARK'})
    }
  }

  return (
    <nav>
      <Link style={{color: themeState.color}} to={routes.home}><h3>Home</h3></Link>
      <Link style={{color: themeState.color}} to={routes.details}><h3>Detail</h3></Link>
      <Link style={{color: themeState.color}} to={routes.contact}><h3>Contact</h3></Link>
      {/* <Link style={{color: themeState.color}} to={routes.favs}><h3>Destacados</h3></Link> */}
      <Link style={{color: themeState.color}} to={routes.favs}><h3>Favs</h3></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      <button  onClick={switchTheme}>{themeState.theme ? '☀️'  : '🌘'}</button>
      
    </nav>

  )
}

export default Navbar