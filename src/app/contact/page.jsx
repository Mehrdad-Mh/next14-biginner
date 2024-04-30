import Image from 'next/image'
import styles from './contact.module.css'
import dynamic from 'next/dynamic'


// const HydrationTestNoSSR = dynamic(() =>import("@/components/hydrationTest") , {ssr : false});

export const metadata = {
  title: 'contact page',
  description: 'Next.js info and the page for contacting us',
}

const ContactPage = () => {


  
   
  return (

    <>
<h1 className={styles.heading}>
  با ما در تماس باشید
</h1>
    <div className={styles.container}>
         
     <div className={styles.formContainer}>

     {/* <div suppressHydrationWarning >
      {a}
     </div> */}


     {/* <HydrationTestNoSSR/> */}
       <form action='' className={styles.form}>

        <input type='text' placeholder='  نام خود را وارد کنید  ' />

        <input type='text' placeholder='  ایمیل خود را وارد کنید ' />

        <input type='text' placeholder='  شماره تماس خود را وارد کنید  ' />
   
        <textarea name="" id="" cols="30" rows="10" placeholder='  پیام خود را وارد نمائید  '></textarea>

        <button  >  ارسال  </button>
       </form>
     </div>

     <div className={styles.imgContainer}>
     <Image src="/contact.png" alt="" fill className={styles.img} />
     </div>

      
    </div>
    </>
  )
}

export default ContactPage