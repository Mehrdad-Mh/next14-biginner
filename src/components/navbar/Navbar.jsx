
import Image from 'next/image'
import Links from './links/Links'
import styles from "./Navbar.module.css"



const Navbar = () => {
  return (
    <div className={styles.container} >
        <div className={styles.logo}> 
         <Image src="/logo2.png" alt='' width={150} height={150} />
        </div>
        <div >
           <Links/>
        </div>
    </div>
  )
}

export default Navbar