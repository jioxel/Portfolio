import { projects } from "@/app/data"
import { project } from "@/app/models"
import Image from 'next/image';
import { Button } from "./components/Button";

const ProjectList =({projects}:{projects:project[]})=>{
  return <div>
    {projects.map(project=> <div>
      <div>
        <Image
          src={`/images/${project.image}`}
          alt={`${project.description}`}
          // className={styles.avatar}
          width={500}
          height={500}
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
  </div>
}

const Proyects = () => {
  return (
    <ProjectList projects={projects}/>
  )
}
export default Proyects