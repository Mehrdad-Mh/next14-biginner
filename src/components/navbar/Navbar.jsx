
import Image from 'next/image'
import Links from './links/Links'
import styles from "./Navbar.module.css"
import { auth } from '@/lib/auth';



const Navbar =async () => {

  const session = await auth();

  // console.log(session,"user session is")

  return (
    <div className={styles.container} >
        <div className={styles.logo}> 
         <Image src="/logo2.png" alt='' width={150} height={150} />
        </div>
        <div >
           <Links session = {session}/>
        </div>
    </div>
  )
}

export default Navbar