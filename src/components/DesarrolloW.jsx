import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';


import LanguageContext from '../context/LanguageContext';

import '../scss/projets.scss'






const ProjectsWeb = () => {

    const {texts} = useContext(LanguageContext);

    return(
        <>
            <div ><h2 className="title__web"><span className='span'>{texts.projects.placeholder1}</span></h2> </div>
                <div className="project_grid">
                    <div className="project_item">
                        <img src="https://i.ibb.co/0yW33m6/Whats-App-Image-2022-10-03-at-12-34-25-PM.jpg" width="250"alt="app tareas" className="proyecto_img"/>
                        <div className="project_info">
                            <h3 className="project_info_title">Tienda Tola-Tola</h3>
                            <p className="project_info_description">HTML - CSS - JavaScript</p>
                            <div className="project_btn_container">
                                <a className="btn_project" href="https://danielasescudero.github.io/tiendaTola-Tola/index.html" target="_BLANK" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Visitar</a>
                                <a className="btn_project" href="https://github.com/DanielaSEscudero/tiendaTola-Tola"
                                    target="_BLANK" rel="noopener noreferrer"><i className="fab fa-github"></i >
                                    Repositorio</a>
                            </div>
                        </div> 
                    </div>

                    <div className="project_item">
                        <img src="https://i.ibb.co/F67k0dS/Whats-App-Image-2022-10-03-at-12-42-34-PM.jpg" width="250"alt="app tareas" className="proyecto_img"/>
                        <div className="project_info">
                            <h3 className="project_info_title">Trish Digital</h3>
                            <p className="project_info_description">Wordpress</p>
                            <div className="project_btn_container">
                                <a className="btn_project" href="https://trishdigital.com.ar/" target="_BLANK"
                                    rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Visitar</a>
                                
                            </div>
                        </div> 
                    </div>
                    <div className="project_item">
                        <img src="https://i.ibb.co/74S4tN2/Whats-App-Image-2022-10-03-at-12-35-56-PM.jpg" width="250"alt="app tareas" className="proyecto_img"/>
                        <div className="project_info">
                            <h3 className="project_info_title">Saint Marie Cake</h3>
                            <p className="project_info_description">HTML - CSS - SASS</p>
                            <div className="project_btn_container">
                                <a className="btn_project" href="https://danielasescudero.github.io/tiendaTola-Tola/index.html" target="_BLANK"
                                    rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Visitar</a>
                                <a className="btn_project" href="https://github.com/DanielaSEscudero/tiendaTola-Tola"
                                    target="_BLANK" rel="noopener noreferrer"><i className="fab fa-github"></i >
                                    Repositorio</a>
                            </div>
                        </div> 
                    </div>
                    <div className="project_item">
                        <img src="https://i.ibb.co/zP6pwSY/Whats-App-Image-2022-10-03-at-12-41-52-PM.jpg" width="250"alt="app tareas" className="proyecto_img"/>
                        <div className="project_info">
                            <h3 className="project_info_title">KaizenConsultora</h3>
                            <p className="project_info_description">Wordpress</p>
                            <div className="project_btn_container">
                                <a className="btn_project" href="https://kaizenconsultora.com.ar/" target="_BLANK"
                                    rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Visitar</a>
                            </div>
                        </div> 
                    </div>
                    
                </div>
                <Link className="arrow" to="/proyectos">
                    <span></span>
                    <span></span>
                    <span></span>
                </Link>
    </>

    )
}
       
export default ProjectsWeb
