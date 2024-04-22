import Link from "next/link"
import styles from "./navLink.module.css"


const NavLink = ({item}) => {
  return (
    <div className={styles.container}>
        <Link href={item.path}  > {item.title} </Link>
    </div>
  )
}

export default NavLink