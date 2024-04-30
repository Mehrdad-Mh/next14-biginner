"use client";
import React, { useState } from 'react';
import styles from "./Links.module.css"
import NavLink from './navLink/navLink';
import Image from 'next/image';


const links = [
 {
     title : "  صفحه اصلی  ",
     path : "/"
 },

 {
     title : "  درباره ما  ",
     path : "/about"
 },

 {
     title : "  تماس با ما  ",
     path : "/contact"
 },

 {
     title : "  مقالات  ",
     path : "/blog"
 },

]
const Links = () => {

   const [open , setOpen] = useState(false)

   const userSession = true;
   const isAdmin = true ;

  return (
   <div className={styles.container}>
     <div className={styles.links}>
        {links.map((link) => (
           <NavLink item={link} key={link.title} />

        ))}{
            userSession ? (
                <>
                
                {isAdmin && (<NavLink item={{title : "  ادمین  " , path : "/admin"}} />) }
                
                <button className={styles.logout}>  خروج  </button>
                </> 
            ) 
            :
            (
                <NavLink item={{title : "  ورود  " , path:"/login"}}/>
            )
        }
    </div>

    {/* <button onClick={() => setOpen((prev) => !prev)} className={styles.menuBtn} >Menu</button> */}
    <Image src="/menu.png" alt='' width={30} height={30} onClick={() => setOpen((prev => !prev))} className={styles.menuBtn} /> 
    { open && (
        <div className={styles.mobileLinks}>
        {links.map((link) => (
            <NavLink item={link} key={link.title}  />
        ))}
    </div>
    )}

   </div>
  )
}

export default Links