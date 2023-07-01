
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./routes";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { useContextGlobal } from "./Components/utils/global.context";







function App() {
  const {themeState} = useContextGlobal()

  return (
      <div className= {"App"}  style={{ width: '100vw', backgroundColor: themeState.bgColor, color: themeState.color}}>
          <Navbar/>
          <h1>Encontra una sonrisa nueva !</h1>
          
          <Routes>
          <Route path={routes.home} element={<Home/>}></Route>
          <Route path={routes.details} element={<Detail/>}></Route>
          <Route path={routes.contact} element={<Contact/>}></Route>
          <Route path={routes.favs} element={<Favs/>}></Route>
          </Routes>
          
          <Footer/>
      </div>
  );
}

export default App;