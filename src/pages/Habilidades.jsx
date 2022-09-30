import React, { useContext } from 'react';
import '../scss/habilidades.scss'

import LanguageContext from '../context/LanguageContext';

const Habilidades = () => {

    const {texts} = useContext(LanguageContext);
  return ( 
        <div className="habilidades" id="habilidades">
            <div className="habilidades_grid">
                <div className="subtitle">
                    <h3><span className='span'>{texts.skills.placeholder1}</span></h3> 
                    <div className="tecnologias_grid">
                        <div className="tecnologias_card">
                            <i className="fab fa-html5 iconos"></i>
                            <span className="iconos-texto">HTML</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-css3-alt iconos"></i>
                            <span className="iconos-texto">CSS</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-js iconos"></i>
                            <span className="iconos-texto">JavaScript</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-react iconos"></i>
                            <span className="iconos-texto">React</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-node-js"></i>
                            <span className="iconos-texto">Node JS</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-bootstrap iconos"></i>
                            <span className="iconos-texto">Bootstrap</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-git iconos"></i>
                            <span className="iconos-texto">Git</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-github github iconos"></i>
                            <span className="iconos-texto">Github</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-sass iconos"></i>
                            <span className="iconos-texto">Sass</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-sass iconos"></i>
                            <span className="iconos-texto">Sass</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-sass iconos"></i>
                            <span className="iconos-texto">Sass</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-sass iconos"></i>
                            <span className="iconos-texto">Sass</span></div>
                            
                        
                    </div>
                </div>
                <div className="blandas">
                    <h3 className="subtitle"><span className='span'>{texts.skills.placeholder2}</span></h3>
                    <div className="habilidades-lista">
                        <span className='span'>{texts.skills.linea1}</span><br/>
                        <span className='span'>{texts.skills.line2}</span><br/>
                        <span className='span'>{texts.skills.line3}</span><br/>
                    </div>
                </div>
            </div>
        </div>

  )
}
export default Habilidades; 

