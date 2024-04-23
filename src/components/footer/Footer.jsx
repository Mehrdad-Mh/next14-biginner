import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
    

      <div className={styles.text}> طراحی و توسعه توسط این مجموعه می باشد </div>

      <div className={styles.logo} >
        <Image src="/logo2.png" alt="" width={150} height={150}  />
      </div>
    </div>
  );
};

export default Footer;
