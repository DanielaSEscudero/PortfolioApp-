import React, { useContext } from 'react';
import '../scss/habilidades.scss'

import LanguageContext from '../context/LanguageContext';

const Habilidades = () => {

    const {texts} = useContext(LanguageContext);
  return ( 
        <div className="habilidades" id="habilidades">
            <div className="habilidades_grid">
                <div>
                    <h3 className="subtitle"><span className='span'>{texts.skills.placeholder1}</span></h3> 
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
                            <i className="bi bi-filetype-sql sql iconos"></i>
                            <span className="iconos-texto">SQL</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-php php iconos"></i>
                            <span className="iconos-texto">PHP</span></div>
                        <div className="tecnologias_card">
                            <i className="fab fa-figma figma iconos"></i>
                            <span className="iconos-texto">Figma</span></div>
                        
                    </div>
                </div>
                <div className="blandas">
                    <h3 className="subtitle"><span className='span'>{texts.skills.placeholder2}</span></h3>
                    <div className="habilidades-lista">
                        <span className='span'>{texts.skills.line1}</span><br/>
                        <span className='span'>{texts.skills.line2}</span><br/>
                    </div>
                    <h3 className="subtitle"><span className='span'>{texts.skills.placeholder3}</span></h3>
                    <div className="habilidades-lista">
                        <span className='span'>{texts.skills.line3}</span>
                        <span className='span'>{texts.skills.line4}</span>
                        <span className='span'>{texts.skills.line5}</span>
                        <span className='span'>{texts.skills.line6}</span>
                        <span className='span'>{texts.skills.line7}</span>
                        <span className='span'>{texts.skills.line8}</span>
                        <span className='span'>{texts.skills.line9}</span>
                    </div>
                </div>
            </div>
        </div>

  )
}
export default Habilidades; 

