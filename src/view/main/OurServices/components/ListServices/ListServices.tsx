import React from 'react';
import styles from './ListServices.module.scss'
// import { listServices } from '../../model/OurServices';
// import CardService from './components/CardService';

const ListServices = () => {
    return (
        <div className={styles.listServices}>

            <h2>
                Наши сервисы
            </h2>

            <div className={styles.list}>
                    {/* {listServices.map((service, index)=>
                    <CardService key={index} service={service}/>
                    )} */}
            </div>
            
        </div>
    );
};

export default ListServices;