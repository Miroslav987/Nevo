import React from "react";
import styles from "./MissionBlock.module.scss";
import Icon from "@shared/ui/Icon/Icon";
import AppButton from "@shared/ui/AppButton";

const MissionBlock = () => {
  return (
    <div className={styles.missionBlock}>
      <div className={styles.sparkWrapper}>
        <Icon name="spark" size={28} />
      </div>
      <div className={styles.info}>
        <p className={styles.text}>
          В нашей компании мы специализируемся на создании цифровых бизнес
          решений, сочетающих креативность и передовые технологии.
          <br/>
           Мы предлагаем
          индивидуальные решения для вашего бизнеса или создания цифровой
          платформы.
        </p>
      </div>
                <AppButton className={styles.ourServiceBtn}>Наши сервисы</AppButton>

    </div>
  );
};

export default MissionBlock;
