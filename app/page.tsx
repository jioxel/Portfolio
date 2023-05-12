import Image from 'next/image'

import styles from './page.module.scss'
import Header from './components/ui/Header/Header'
import Link from 'next/link'
import Button from './components/Button'
import Experience from './components/ui/Experience/Experience';
import { Projects } from './components/ui/Projects'


export default function Home() {
  return (
  <>
    {/* <Header/> */}
    <main className={styles.main}>
      <section className={styles.sectionMe}>
        <div className={styles.contentMe}>
          <div className={styles.contentMeInfo}>
            <h1 className={styles.h1}>Jovany Sánchez</h1>
            <h2 className={styles.h2}>Frontend Developer</h2>
            <p className={styles.info}>+1 año de experiencia creando proyectos</p>
            <div className={styles.contentLinks}>

            
            <Button link='#ref' type='download'/>
              <Button link='#ref' type='github'/>
              
              <Button link='#ref' type='linkedin'/>
            </div>
          </div>
          <div className={styles.avatarContent}>
          <Image
                  src="/me2.jpg"
                  alt="Foto jovany"
                  className={styles.avatar}
                  width={800}
                  height={800}
                  quality={100}
                  priority
                />
          </div>
        </div>
        
      </section>

      <section className={styles.sectionExperience} id="experience">
        <div className={styles.experienceContent}> 
        <Experience />
        </div>
      
      </section>

      <section className={styles.sectionProjects} id="experience">

        <Projects />

      
      </section>
        

      




    </main>
    <footer></footer>
    </>
  )
}
