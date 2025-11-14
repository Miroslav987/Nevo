import React from 'react';
import styles from "./OurTariffPlans.module.scss";
import ListTarif from './components/ListTariff';
const OurTariffPlans = () => {
    return (
        <div className={styles.ourTariffPlans}>
            <div className='container'>
            <div className={styles.tariffsInfo}>
                <h2>Наши <br/> Тарифные планы</h2>
                <p>Наши гибкие тарифные планы, разработанные с учетом вашего бюджета и обеспечивающие понятные и конкурентоспособные цены на все наши услуги.</p>
            </div>
            <ListTarif/>
            </div>
        </div>
    );
};

export default OurTariffPlans;