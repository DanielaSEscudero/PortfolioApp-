import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';


import LanguageContext from '../context/LanguageContext';

import '../scss/cards.scss'






const Projects = () => {

    const {texts} = useContext(LanguageContext);


    return(
        <>
            <div><h2 className="proyectos_title"><span className='span'>{texts.projects.title}</span></h2> </div>
                <div className="proyecto_grid">
                    <div className="proyecto_item proyecto1">
                        <img src="https://www.womgp.com/blog/wp-content/uploads/2021/03/Desarrollo-Web-Dibdata.jpg" height="300" alt="" className="proyecto_img"/>
                        <div className="proyecto_info">
                            <h3 className="proyecto_info_title"><span className='span'>{texts.projects.placeholder1}</span></h3>
                                <Link className="btn_proyecto" to="/proweb">
                                    <span className='span'>{texts.projects.btn}</span></Link>
                        </div> 

                    </div>
                    <div className="proyecto_item proyecto2">
                    <img src="https://www.pinkstone.es/wp-content/uploads/2016/12/creaci%C3%B3n-de-apps.gif" height="300" alt="app" className="proyecto_img"/>

                    <div className="proyecto_info">
                        <h3 className="proyecto_info_title"><span className='span'>{texts.projects.placeholder2}</span></h3>
                            <Link className="btn_proyecto" to="/proapp"><span className='span'>{texts.projects.btn}</span></Link>

                        </div>

                    </div>

                </div>
  
        </>

    )
}
       
export default Projects

