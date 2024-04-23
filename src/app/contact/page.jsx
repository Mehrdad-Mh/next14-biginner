import Image from 'next/image'
import React from 'react'
import styles from './contact.module.css'

const ContactPage = () => {
  return (
    <div className={styles.container}>

     <div className={styles.formContainer}>
       <form action='' className={styles.form}>

        <input type='text' placeholder='  نام خود را وارد کنید  ' />

        <input type='text' placeholder='  ایمیل خود را وارد کنید ' />

        <input type='text' placeholder='  شماره تماس خود را وارد کنید  ' />
   
        <textarea name="" id="" cols="30" rows="10" placeholder='  پیام خود را وارد نمائید  '></textarea>

        <button type='submit' >  ارسال  </button>
       </form>
     </div>

     <div className={styles.imgContainer}>
     <Image src="/contact.png" alt="" fill className={styles.img} />
     </div>

      
    </div>
  )
}

export default ContactPage