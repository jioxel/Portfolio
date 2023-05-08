import Link from "next/link"
import Image from 'next/image';

export const Button = ({url,type}:{url:String,type:'gitHub' | 'link'}) => {
  return (<>
  {
     type == 'gitHub'
     ? <Link href={`${url}`}><Image src={'/github-line.svg'} alt='Github Link' width={50} height={50}/></Link> 
     : <Link href={`${url}`}><Image src={'/link-line.svg'} alt='Link to page' width={50} height={50}/></Link> 
  }
  </>
  )
}