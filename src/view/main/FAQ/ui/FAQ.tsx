import React from 'react';
import FAQAbout from '../components/FAQABout/FAQAbout';
import styles from './FAQ.module.scss'
import ListFAQ from '../components/FAQList/ListFAQ';

const FAQ = () => {
    return (
        <div className={styles.faq}>
            <div className='container '>
            <FAQAbout/>
            <ListFAQ/>
            </div>
        </div>
    );
};

export default FAQ;