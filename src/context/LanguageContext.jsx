import { createContext, useState } from "react";

const initialLanguage = localStorage.getItem("lang") || "en-US";

const translations = {
    "es-ES": {
        lang:"es-ES",
        home:{
          "language-btn": "Español",
          line1:"Hola, ",
          line2:"Soy Daniela Escudero,",
          line3:"React FrontEnd Developer",
          line4:"Bienvenido a mi portafolio, vas a encontrar informacion sobre mi, mis proyectos y como contactarme",
        },
        header:{
            nav1:"Inicio",
            nav2:"Sobre mi",
            nav3:"Habilidades",
            nav4:"Proyectos",
        },
        
        aboutMe:{
            title:"Sobre Mi",
            placeholder:"Soy Daniela Escudero, React Frontend Developer",
            linea1:"Me descubri siendo una apasionada por el desarrollo web. ",
            line2:"Siempre en formacion y aprendiendo.",
            line3:"Mi objetivo a futuro es porder desempeñarme como desarrolladora y poder vivir de y para ello.",
            line4:"Me intereso en el desarrollo personal y aspiro a desarrollar mis habilidades al maximo, para poder llevar adelante proyectos.",
            line5:"Amo compartir con personas y tengo muchas ganas de unirme a un grupo de trabajo para poder aportar valor y mis conocimientos.",
            btn:"Mirá mi CV!"
        },
        skills:{
            title:"Mis Habilidades",
            placeholder1:"Tecnologias",
            placeholder2:"Otras aptitudes",
            linea1:"Me gusta plantear los proyectos pensando en el usuario final para brindar la mejor experiencia.  ",
            line2:"Capacitandome para mejorar dia a dia mis diseño y las interfaces para mejor navegavilidad.",
            line3:""
        },
        projects:{
            title:"Proyectos"
        }
    },
    "en-US": {
        lang:"en-US",
        home:{
            "language-btn": "English",
            line1:"Hello",
            line2:" I'm Daniela Escudero",
            line3:"React Front End Developer",
            line4:"Welcome to my portfolio, you will find information about me, my projects and how to contact me",
        },
        header:{
            nav1:"Home",
            nav2:"About me",
            nav3:"Skills",
            nav4:"Projects",
        },
        
        aboutMe:{
            title:"About me",
            placeholder:"I'm Daniela Escudero, React Frontend Developer",
            linea1:"I discovered myself being passionate about web development. ",
            line2:"Always in training and learning.",
            line3:"My goal in the future is to be able to work as a developer and be able to live from and for it.",
            line4:"I am interested in personal development and I aspire to develop my skills to the maximum, to be able to carry out projects.",
            line5:"I love sharing with people and I really want to join a work group to be able to add value and my knowledge.",
            btn:"Look at my CV!"
        },
        skills:{
            placeholder1:"Skills",
            placeholder2:"Other skills",
            linea1:"I like to plan projects with the end user in mind to provide the best experience. ",
            line2:"Training myself to improve day by day my design and interfaces for better navigability.",
            line3:""
        },
        projects:{
            title:"Projects"
        }
        
    },
};



const LanguageContext = createContext();
export default LanguageContext;



function LanguageProvider ({children}) {
    const [language, setLanguage] = useState(initialLanguage)
    const [texts, setTexts] = useState(translations[language])

    const handleLanguage = () =>{ 
        if(language === "es-ES"){
            setLanguage("en-US")
            setTexts(translations["en-US"])
            localStorage.setItem("lang","en-US")
        }
        else{
            setLanguage("es-ES")
            setTexts(translations["es-ES"])
            localStorage.setItem("lang","es-ES")
        }
    }

    const data = {texts,handleLanguage}

    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}
export {LanguageProvider};