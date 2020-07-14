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
                    <img className={styles.img} src="https://i.imgur.com/CMXuSWH.jpg" alt=""/>
                    <h3>Mia Escalera</h3>
                    <h3>President</h3>
                </div>
                <div className={styles.container}>
                    <img className={styles.img} src="https://i.imgur.com/bBTPpF1.jpg" alt=""/>
                    <h3>Matthew Drew</h3>
                    <h3>Vice President</h3>
                </div>
                <div className={styles.container}>
                    <img className={styles.img} src="https://i.imgur.com/kHaQgoW.jpg" alt=""/>
                    <h3>John Foster</h3>
                    <h3>Marketing Head</h3>
                </div>
            </div>
        </div>
    )
}

export default Team;