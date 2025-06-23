'use client'
import OurPartnersCarousel from '../components/OurPartnersCarousel/inex';
import OurTeamSwiper from '../components/OurTeamSwiper';
import styles from './OurTeam.module.scss';

const OurTeam = () => {

  return (
    <div className={styles.ourTeam}>
      <div className='container'>
        <h2 className={styles.title}>Наша команда</h2>
        <OurTeamSwiper/>
        <OurPartnersCarousel />
      </div>
    </div>
  );
};

export default OurTeam;
