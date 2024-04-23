import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"



const postCard = () => {
  return (
    <div className={styles.container}>

        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image src="" alt="" className={styles.img} />
          </div>
          <span className={styles.date}>  01/02/2024  </span>
        </div>

        <div className={styles.bottom}>
          <h1 className={styles.title}>
           تیتر
          </h1>
          <p className={styles.desc}>
            توضیحات
          </p>
          <Link href="/blog/post" >  اطلاعات بیشتر  </Link>
        </div>

    </div>
  )
}

export default postCard