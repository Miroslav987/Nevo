import React from 'react';
import styles from './CTAHeading.module.scss'
import { footer } from '@entities/footer/model/footer.mock';

const CTAHeading = () => {
  return (
    <h2 className={styles.ctaheading} dangerouslySetInnerHTML={{__html:footer.ctaHeading}}>
    </h2>
  );
};

export default CTAHeading;