import styles from './experience.module.scss'
interface experience{
     companyName: string
     startDate:{
          day?:number
          month: string
          year:number
     }
     endDate?:{
          day?:number
          month: string
          year:number

     }
     position:string
     description:string
     responsibilities:string[]
     tools:string[]
}
interface Props{
     historyEperience: experience[]
}
const ExperienceList = ({historyEperience}:Props) => {

  return (
     <div className="experienceList">
          {
               historyEperience.map((job)=><div className={styles.experienceElement}>
                    <div className={styles.experienceLeft}>
                         <h3 className={styles.h3}>COMPANY</h3>
                         <div className={styles.experienceTextContent}>
                              <p className={styles.pCompany}>{job.companyName}</p>
                              <p className={styles.pPosition}>{job.position}</p>
                              <p className={styles.pSeason}>{`${job.startDate.month} ${job.startDate.year} - `} {job.endDate ? job.endDate.month : "Currently"} {job.endDate ? job.endDate.year : ""}</p>
                              <p className={styles.pDescription}>{job.description}</p>
                         </div>
                    </div>
                    <div className={styles.experienceRight}>
                         <div className={styles.experienceResponsabilities}>
                              <h3 className={styles.h3}>RESPONSABILITIES</h3>
                              <div className={styles.experienceTextContent}>
                                   <ul className={styles.ul}>
                                   {
                                        job.responsibilities.map((responsabilitie,i)=><li key={i}>* {responsabilitie}</li>)
                                   }
                                   </ul>
                              </div>
                         </div>
                         <div className={styles.experienceTools}>
                              <h3 className={styles.h3}>TOOLS</h3>
                              <div className={styles.experienceTextContent}>
                              {
                                   job.tools.map((tool)=><>{tool}</>)
                              }
                              </div>
                         </div>
                    </div>
               </div>)
          }
     </div>
  )
}
export default ExperienceList