import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import LanguageContext from '../context/LanguageContext';


import '../scss/cards.scss'






const ProjectsApp = () => {

    const {texts} = useContext(LanguageContext);

    return(
        <>
            <div ><h2 className="proyectos_title"><span className='span'>{texts.projects.placeholder2}</span></h2> </div>
                <div className="proyecto_grid">
                    <div className="proyecto_item proyecto1">
                        <img src="https://i.ibb.co/wpg4VHs/ReactApp.jpg" height="300" alt="app tareas" className="proyecto_img"/>
                        <div className="proyecto_info">
                            <h3 className="proyecto_info_title">A Gourmet App</h3>
                            <p className="proyecto_info_description">React JS - Redux - context</p>
                            <div className="proyecto_btn_container">
                                <a className="btn_proyecto" href="https://agranelapp.netlify.app/" target="_BLANK"
                                    rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Visitar</a>
                                <a className="btn_proyecto" href="https://github.com/DanielaSEscudero/A-Granel-App"
                                    target="_BLANK" rel="noopener noreferrer"><i className="fab fa-github"></i >
                                    Repositorio</a>
                            </div>
                        </div> 

                    </div>
            
                <div className="proyecto_item proyecto2">
                    <img src="https://i.ibb.co/994p3sY/tiendadisco.png"height="300"alt="app" className="proyecto_img" />
                    <div className="proyecto_info">
                        <h3 className="proyecto_info_title">Tienda disco</h3>
                        <p className="proyecto_info_description">React JS - Firebase - Context</p>
                        <div className="proyecto_btn_container">
                            <a className="btn_proyecto" href="https://tiendadisco.netlify.app/" target="_BLANK"
                                rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Visitar</a>
                            <a className="btn_proyecto" href="https://github.com/DanielaSEscudero/ReactJS_Coderhouse"
                                target="_BLANK" rel="noopener noreferrer"><i className="fab fa-github"></i>
                                Repositorio</a>
                        </div>
                    </div>
                    
                </div>
                </div>
                <Link className="arrow" to="/proyectos/">
                    <span></span>
                    <span></span>
                    <span></span>
                </Link>  
        </>

    )
}
       
export default ProjectsApp