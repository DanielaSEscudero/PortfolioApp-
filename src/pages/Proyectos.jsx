import React, { useContext }  from 'react';

import LanguageContext from '../context/LanguageContext';

import '../scss/card.scss'






const Proyectos = () => {

    const {texts} = useContext(LanguageContext);

    return(
        <>
            <section class="portafolio padding" id="portafolio">
                <h2 class="titulo"><span className='span'>{texts.projects.title}</span></h2>
                <h3 class="parrafo">Últimos proyectos realizados.</h3>
                <div class="portafolio__galeria">
                    <a class="portafolio__galeria-img portafolio__animacion" href="https://danielasescudero.github.io/tiendaTola-Tola/index.html"
                        target="_blank" rel="noopener noreferrer">
                        <img class="portafolio__galeria-img " src="multimedia/demo tolatola.png" alt="demo TolaTola"></img>
                        <div class="overlay">
                        <p class="overlay__texto">
                            HTML - CSS - JS 
                        </p>
                        </div>
                    </a>
                    <a class="portafolio__galeria-img portafolio__animacion" href="https://danielasescudero.github.io/Saint-Marie-Cake/"
                        target="_blank" rel="noopener noreferrer">
                        <img class="portafolio__galeria-img " src="multimedia/demo SM.png" alt="demo TolaTola" > </img>
                        <div class="overlay">
                        <p class="overlay__texto">
                            HTML - CSS - SASS
                        </p>
                        </div>
                    </a>
                    
                    <a class="portafolio__galeria-img portafolio__animacion" href="https://danielasescudero.github.io/Saint-Marie-Cake/"
                        target="_blank" rel="noopener noreferrer">
                        <img class="portafolio__galeria-img " src="multimedia/demo SM.png" alt="demo TolaTola" > </img>
                        <div class="overlay">
                            <p class="overlay__texto">
                                HTML - CSS - SASS
                            </p>
                        </div>
                    </a>
                </div>
            </section>
        </>

    )
}
       
export default Proyectos



