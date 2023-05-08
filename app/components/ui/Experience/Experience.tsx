import ExperienceList from './ExperienceList'
import style from './experience.module.scss'
interface experience{
     companyName: string
     startDate:{
          day:number
          month: string
          year:number
     }
     endDate?:{
          day:number
          month: string
          year:number

     }
     position:string
     description:string
     responsibilities:string[]
     tools:string[]
}

const historyExperience:experience[]=[
     {    companyName: 'ENDTOEND MANAGEMENT',
          startDate:{
               day:1,
               month:"January",
               year:2022,
          },
          endDate:{
               day:1,
               month:"Febrary",
               year:2023
          },
          position:'Jr. Developer',
          description:'Comence con un trabajo de becario dando mantenimiento a aplicaciones que la empresa tenia, despues de 3 meses se me dio el contrato para ser un trabajador formal, fui parte de desarrollo de proyectos y tambien tenia mi propio equipo',
          responsibilities:["Desarrollo de aplicaciones con React",
          "Desarrollo de aplicaciones con Django",
          "Automatización de procesos con python",
          "Mantenimiento a Aplicaciones ASP .Net",
          "Desarrollo de skills para Alexa",
          "Soporte básico a servidores empresariales"],
          tools:["javascript"]
     }
]
const Experience = () => {

  return (<>
          <h2 className={style.h2}>Experience</h2>
          <ExperienceList historyEperience={historyExperience}/>
     </>
  )
}
export default Experience