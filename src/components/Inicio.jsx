import React, { useContext } from 'react';


// Style 
import "../scss/inicio.scss";

// Context
import LanguageContext from '../context/LanguageContext';

// extra
//import img from "../img/cabecera-web-hosting.jpg";

const Inicio = () => {

  const {texts,handleLanguage} = useContext(LanguageContext);

  return (
    <>
        <div className='home'>
            <div className='home__bg-container'>
              <svg className='logo__home' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>

              
    
              <div className='home__text-container'>
                <p className='home__text'>
                  <span className='home__line-text'>{texts.home.line1}</span>
                  <span className='home__line-text'>{texts.home.line2}</span>
                  <span className='home__line-text'>{texts.home.line3}</span>
                  <span className='home__line-text'>{texts.home.line4}</span>
                </p>
              </div>

                <button onClick={handleLanguage} className='language-btn'>{texts.home["language-btn"]}
                </button>
            </div>
        </div>
    </>
  )
}

export default Inicio