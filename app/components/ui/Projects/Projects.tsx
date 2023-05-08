import { projects } from "@/app/data"
import { project } from "@/app/models"
import Image from 'next/image';
import { Button } from "./components/Button";
import styles from './projects.module.scss'
const ProjectList =({projects}:{projects:project[]})=>{
  return <>
    {projects.map(project=> <div className={styles.cardProject}>
      <div className={styles.imgContent}>
        <Image
          src={`/images/${project.image}`}
          alt={`${project.description}`}
          className={styles.img}
          width={320}
          height={180}
          quality={100}
          priority
        />
      </div>
      <div>
        <h3>{project.title}</h3>
        <div>
          <Button url={project.link ?? ""} type="gitHub"/>
          <Button url={project.link ?? ""} type="link"/> 
        </div>
        <p>{project.description}</p>
        

      </div>
    </div>)}
    </>
  
}

const Proyects = () => {
  return (
    <div className={styles.projectsContent}>
    <ProjectList projects={projects}/>
    </div>
  )
}
export default Proyects