import React from 'react';
import styles from './ListFAQ.module.scss'
// import { listFAQ } from '../../model/faq';
// import CardFAQ from './components/CardFAQ/CardFAQ';
const ListFAQ = () => {
    return (
        <div className={styles.list}>
            {/* {listFAQ.map((card,index)=> 
                <CardFAQ card={card} key={index}/>
            )}
             */}
        </div>
    );
};

export default ListFAQ;