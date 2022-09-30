import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sobremi from "./pages/SobreMi";
import Habilidades from "./pages/Habilidades";
import Proyectos from "./pages/Proyectos";
import Home from "./pages/Home";

import { LanguageProvider } from "./context/LanguageContext";


function App() {

  return (
    <div className="app">
      <LanguageProvider>
        <Header />
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Home/>} ></Route>
            <Route exact path="/sobremi/" element={ <Sobremi />} ></Route>
            <Route exact path="/habilidades/" element={<Habilidades/>}></Route>
            <Route exact path="/proyectos/" element={<Proyectos/>}></Route>
          </Routes>  
        </main>
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
