import React from 'react';
import styles from './ListOurProject.module.scss'
import { listOurProject } from '../model/ListOurProject.mock';
import CardProject from '../components/CardProject';
const ListOurProject = () => {
    return (
        <div className={`container ${styles.ourProject}`}>
            <h2 className={styles.title}>Ознакомьтесь с кейсами работ
                нашей студии IT Разработки</h2>
                <div className={styles.listProject}>
                    {listOurProject.map((card)=>
                        <CardProject card={card}/>
                    )}
                </div>
        </div>
    );
};

export default ListOurProject;