"use client";

import { CSSProperties, FC, useEffect, useState } from "react";
import styles from "./CardTariff.module.scss";
import Icon from "@shared/ui/Icon/Icon";
import { CardTariffType } from "../../../../model/OurTariffPlans";
import { useModal } from "@shared/context/ModalProvider";
import ContactForm from "@entities/ContactForm/ContactForm";
import AppButton from "@shared/ui/AppButton";

export type CardTariffProps = {
  tariff: CardTariffType;
};

const CardTariff: FC<CardTariffProps> = ({ tariff }) => {
  const { openModal } = useModal();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      if (tariff.hasHorizontal && window.innerWidth < 1000) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [tariff.hasHorizontal]);

  if (!isVisible) return null;

  const hasHorizontal: CSSProperties | undefined = tariff.hasHorizontal ? {
        maxWidth: "1100px",
        maxHeight: "325px",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
      } : undefined;
  return (
    <div
      style={hasHorizontal}
      className={`${styles.cardTariff}  ${
        tariff.hasTariffBlack ? styles.tarrifBlack : ""
      }`}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{tariff.title}</h2>
        <div className={styles.tag}>
          <h3>{tariff.tag}</h3>
        </div>
        <h4
          className={styles.subtitle}
          dangerouslySetInnerHTML={{ __html: tariff.subtitle }}
        ></h4>
        {!tariff.hasHorizontal && (
          <>
            <p className={styles.price}>
              {tariff.price.toLocaleString("en-US")}
              <span className={styles.currencyType}> c</span>
              <span className={styles.paymentType}> /единоразовый платеж</span>
            </p>
            <AppButton onClick={()=>openModal(<ContactForm bot={tariff.title}/>)} className={styles.button}>
              <Icon className={styles.icon} name="rocket" />
              Начать сейчас
            </AppButton>
          </>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.features}>
          {tariff.features.map((feature, index) => (
            <p
              key={index}
              className={styles.feature}
              dangerouslySetInnerHTML={{ __html: feature }}
            ></p>
          ))}
        </div>
        {tariff.hasHorizontal && (
          <>
            <p className={styles.price}>
              {tariff.price.toLocaleString("en-US")}
              <span className={styles.currencyType}> c</span>
              <span className={styles.paymentType}> /единоразовый платеж</span>
            </p>
            <AppButton onClick={()=>openModal(<ContactForm bot={tariff.title}/>)} className={styles.button}>
              <Icon className={styles.icon} name="rocket" />
              Начать сейчас
            </AppButton>
          </>
        )}
      </div>
    </div>
  );
};

export default CardTariff;
