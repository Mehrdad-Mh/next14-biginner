
import Image from "next/image";
import styles from "./home.module.css"

const Home = () => {

  return (
           <div className={styles.container}>

            <div className={styles.textContainer}>
              <h1 className={styles.title}>
                آژانس دیجیتال مارکتینگ
              </h1>
              <p className={styles.desc}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
               چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>

              <div className={styles.buttons}>
                <div className={styles.button}>  اطلاعات بیشتر  </div>
                <div className={styles.button}>  تماس با ما  </div>
              </div>
              <div className={styles.brands}>

                <Image src="/brands.png" alt="" className={styles.brandImg} fill />

              </div>
            </div>
            <div className={styles.imgContainer}>
              <Image src="/hero.gif" alt="" className={styles.heroImg} fill  />
            </div>


           </div>
         ) 
  ;
};

export default Home;