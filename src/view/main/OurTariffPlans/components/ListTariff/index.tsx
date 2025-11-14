import React from "react";
import styles from "./ListTariff.module.scss";
import CardTariff from "./components/CardTariff";
import { listTariff } from "../../model/OurTariffPlans";

const ListTarif = () => {
  const cardBlackTariff = listTariff.find(tariff => tariff.hasTariffBlack);

  
  
  return (
    <>
    <div className={styles.listTariffs}>
      {listTariff.map((tariff, index) => (
        <CardTariff key={index} tariff={tariff} />
      ))}
    </div>
      {cardBlackTariff && (
        <CardTariff tariff={{ ...cardBlackTariff, hasHorizontal: true }} />
      )}
      </>
  );
};

export default ListTarif;
