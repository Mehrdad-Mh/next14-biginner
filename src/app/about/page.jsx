import Image from "next/image";
import React from "react";
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div className={styles.container}>

      <div className={styles.textContainer}>
      <h3 className={styles.subtitle}>
        درباره ما
      </h3>
      <h1 className={styles.title}>
        ایده های پیشنهادی ما بزرگتر , خلاقانه تر و جدیدتر هستند
      </h1>
      <p className={styles.desc}>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. 
      </p>

      <div className={styles.boxes}>
        <div className={styles.box}>
          <h2>
            10K +
          </h2>
          <p>
            سال تجربه کاری
          </p>
        </div>
        <div className={styles.box}>
          <h2>
            10K +
          </h2>
          <p>
            سال تجربه کاری
          </p>
        </div>
        <div className={styles.box}>
          <h2>
            10K +
          </h2>
          <p>
            سال تجربه کاری
          </p>
        </div>
      </div>
      </div>

      <div className={styles.imgContainer}>
       <Image src="/about.png" alt="about image" fill className={styles.img}  />
      </div>
      
    </div>
  );
};

export default AboutPage;
