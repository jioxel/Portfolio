import Link from "next/link"
import styles from './header.module.scss'
interface Props{
     children:string
     href:string
}
const NavLink = ({children,href}:Props) => {
  return (
    <Link href={`#${href}`} className={styles.navLink}>{children}</Link>
  )
}
export default NavLink