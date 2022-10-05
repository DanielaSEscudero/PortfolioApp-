import React, { useContext } from 'react';
import '../scss/sobremi.scss'

import LanguageContext from '../context/LanguageContext';

const Sobremi = () => {

    const {texts} = useContext(LanguageContext);

  return (
    <div>
        <section className="sobre-mi" id="sobre-mi">
        <div className="c">
            <h2 className="section_title sobre-mi_title"><span className='span'>{texts.aboutMe.title}</span></h2>
            <div className="sobre-mi_grid">
                <div className="sobre-mi_img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tienda-app-827a6.appspot.com/o/image1foto%20perfil.png?alt=media&token=c020d98e-f02e-4eca-8143-5dc7f25b593b" width="500" alt="fotoPerfil" id="fotoPerfil"/>
                </div>
                <div className="sobre-mi_descripcion">
                    <h3><span className='span'>{texts.aboutMe.placeholder}</span>
                        <span className='span'>{texts.aboutMe.placeholder1}</span>
                        <span className='span'>{texts.aboutMe.placeholder2}</span>
                    </h3>
                    <p className="descripcion_text">
                        <span className='span'>{texts.aboutMe.line1}</span>
                        <span className='span'>{texts.aboutMe.line2}</span>
                        <span className='span'>{texts.aboutMe.line3}</span>
                    </p>
                    <a className="btn-cv" href={texts.aboutMe.cv} rel="noopener noreferrer"
                        target="_blank" id="btmCv"><i className="fas fa-file-download"></i><span className='span'>{texts.aboutMe.btn}</span></a>
                    
                </div>
            </div> 
        </div>
        </section>
    </div>
  )
}
 export default Sobremi;
