import React from 'react';
import styles from './Team.module.css';

const Team = () => {
    return(
        <div>
            <div className={styles.box}>
                <h4 className={styles.h4}>Who we are</h4>
                <h2 className={styles.h2}>Our Professional Team</h2>
                <p className={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere 
                similique praesentium</p>
            </div>
            <div className={styles.subBox}>
                <div className={styles.container}>
                    <img className={styles.img} src="https://i.imgur.com/aEKI1Ul.jpg" alt=""/>
                    <h3 className={styles.top}>Mia Escalera</h3>
                    <h3 className={styles.bot}>President</h3>
                </div>
                <div className={styles.container}>
                    <img className={styles.img} src="https://i.imgur.com/CMXuSWH.jpg" alt=""/>
                    <h3 className={styles.top}>Matthew Drew</h3>
                    <h3 className={styles.bot}>Vice President</h3>
                </div>
                <div className={styles.container}>
                    <img className={styles.img} src="https://i.imgur.com/kHaQgoW.jpg" alt=""/>
                    <h3 className={styles.top}>John Foster</h3>
                    <h3 className={styles.bot}>Marketing Head</h3>
                </div>
            </div>
        </div>
    )
}

export default Team;