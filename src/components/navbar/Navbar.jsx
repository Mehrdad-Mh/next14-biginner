import React from 'react'
import Links from './links/Links'
import styles from "./Navbar.module.css"



const Navbar = () => {
  return (
    <div className={styles.container} >
        <div className={styles.logo}>logo</div>
        <div >
           <Links/>
        </div>
    </div>
  )
}

export default Navbar