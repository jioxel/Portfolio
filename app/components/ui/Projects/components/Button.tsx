import Link from "next/link"
import Image from 'next/image';
import style from './components.module.scss'
export const Button = ({url,type}:{url:String,type:'gitHub' | 'link'}) => {
  return (<>
  {
     type == 'gitHub'
     ? <Link href={`${url}`} className={style.button}>
      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"  height={19} width={19} xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
     </Link> 
     : <Link href={`${url}`} className={style.button}>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"  height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
     </Link> 
  }
  </>
  )
}