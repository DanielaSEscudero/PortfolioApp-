import { createContext, useState } from "react";

const initialLanguage = localStorage.getItem("lang") || "en-US";

const translations = {
    "es-ES": {
        lang:"es-ES",
        home:{
          "language-btn": "Español",
          line1:"Hola!",
          line2:"Soy Daniela Escudero,",
          line3:"React FrontEnd Developer",
          line4:"Analista QA",
          line5:"Bienvenido a mi portafolio, vas a encontrar informacion sobre mi, mis proyectos y como contactarme",
        },
        header:{
            nav1:"Inicio",
            nav2:"Sobre mi",
            nav3:"Habilidades",
            nav4:"Proyectos",
        },
        
        aboutMe:{
            title:"Sobre Mi",
            placeholder:"Soy Daniela Escudero",
            placeholder1:"React Frontend Developer, ",
            placeholder2:"Analista QA y Diseñadora grafica en progreso ",
            line1:"Aspiro a formar parte de un equipo de trabajo, aportando mis conocimientos en programación y mis habilidades y competencias técnicas en pro del éxito de la empresa.",
            line2:"Destaco mi gran capacidad de gestión de trabajo y tiempo, mis habilidades comunicativas y de organización.",
            line3:"Proactividad y compromiso con el cliente y la empresa.",
            btn:"Mirá mi CV!",
            cv:"https://drive.google.com/file/d/1M4xlFl7UwX9Xvi81DDgtKB590EueH_aa/view?usp=sharing"    
        },
        skills:{
            title:"Mis Habilidades",
            placeholder1:"Tecnologias",
            placeholder2:"Otras aptitudes",
            placeholder3:"Habilidades blandas",
            line1:"Me gusta plantear los proyectos pensando en el usuario final para brindar la mejor experiencia.  ",
            line2:"Capacitandome para mejorar dia a dia mis diseño y las interfaces para mejor navegavilidad.",
            line3:"Trabajo en equipo",
            line4:"Comunicación asertiva",
            line5:"Servicio al cliente",
            line6:"Capacidad analítica y de resolución de problemas",
            line7:"Atención al detalle",
            line8:"Deseos de aprender y estar a la vanguardia",
            line9:"Adaptabilidad, saber priorizar y manejo de tareas múltiples",
        },
        projects:{
            title:"Proyectos",
            placeholder1:"Desarrollo Web",
            placeholder2:"Desarrollo App",
            btn:"Ver Proyectos"
        }
    },
    "en-US": {
        lang:"en-US",
        home:{
            "language-btn": "English",
            line1:"Hello!",
            line2:" I'm Daniela Escudero",
            line3:"React Front End Developer",
            line4:"Analist QA",
            line5:"Welcome to my portfolio, you will find information about me, my projects and how to contact me",
        },
        header:{
            nav1:"Home",
            nav2:"About me",
            nav3:"Skills",
            nav4:"Projects",
        },
        
        aboutMe:{
            title:"About me",
            placeholder:"Soy Daniela Escudero",
            placeholder1:"React Frontend Developer, ",
            placeholder2:"QA Analyst and Graphic Designer in Progress ",
            line1:"I aspire to be part of a work team, contributing my programming knowledge and my technical skills and competencies for the success of the company.",
            line2:"I highlight my great capacity for work and time management, my communication and organizational skills.",
            line3:"Proactivity and commitment to the client and the company.",
            btn:"Look at my CV!",
            cv:"https://drive.google.com/file/d/11zdZnjHVQU6OtSoeK5XwdsjEzMwxnhxV/view?usp=sharing" 
        },
        
        skills:{
            placeholder1:"Skills",
            placeholder2:"Other skills",
            placeholder3:"Soft skills",
            line1:"I like to plan projects with the end user in mind to provide the best experience. ",
            line2:"Training myself to improve day by day my design and interfaces for better navigability.",
            line3:"Teamwork",
            line4:"Assertive communication",
            line5:"Customer service",
            line6:"Capacidad analítica y de resolución de problemas",
            line7:"Analytical and problem solving capacity",
            line8:"Desire to improve and be at the forefront",
            line9:"Adaptability, knowing how to prioritize and managing multiple tasks",
        },
        projects:{
            title:"Projects",
            placeholder1:"Web development",
            placeholder2:"App Development",
            btn:"See projets"
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