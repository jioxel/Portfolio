import Link from "next/link";
import NavLink from "./NavLink";
import styles from './header.module.scss'
interface InfoLink{
     children:string
     href:string
}
interface Props{
     navLinks: InfoLink[];
}
const NavList = ({navLinks}:Props) => {
  return (
     <div className={styles.navList}>
    {
     navLinks.map((link)=><NavLink key={link.href} href={link.href}>{link.children}</NavLink>)
    }
    </div>
  )
}
export default NavList