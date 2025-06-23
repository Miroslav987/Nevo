"use client"
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ListOurProject.module.scss'
import { listOurProject } from '../model/ListOurProject.mock';
import CardProject from '../components/CardProject';
const ListOurProject = () => {
    return (
        <div className={`container ${styles.ourProject}`}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={styles.title}>
                Ознакомьтесь с кейсами работ
                нашей студии IT Разработки
                </motion.h2>

            <div className={styles.listProject}>
                {listOurProject.map((card, i) =>
                    <CardProject key={i} card={card} />
                )}
            </div>
        </div>
    );
};

export default ListOurProject;