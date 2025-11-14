import React from "react";
import styles from "./AboutBlock.module.scss";
import BookCallButton from "@shared/ui/BookCallButton/BookCallButton";
import AppButton from "@shared/ui/AppButton";
import AppImage from '@shared/ui/Image'

const AboutBlock = () => {
  return (
    <div className={styles.aboutBlock}>
      <h1>ИИ-Агент - решения будущего бизнеса</h1>
      <p className={styles.text}> Цифровое агентство вашего будущего </p>
      <div className={styles.btns}>
        <BookCallButton />
        <AppButton className={styles.ourServices}>Наши услуги</AppButton>
      </div>
      <div className={styles.aboutImg}>
        <AppImage name="about_main" />
      </div>
    </div>
  );
};

export default AboutBlock;
