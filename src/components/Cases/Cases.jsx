import React from 'react';
import styles from './Cases.module.css';

const Cases = () => {
    return(
        <div className={styles.box}>
            <div>
                <h4 className={styles.h4}>This is what we do</h4>
                <h2 className={styles.h2}>Business Cases</h2>
                <p className={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere 
                similique praesentium</p>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <img className={styles.img} src="https://i.imgur.com/P5YQZUC.jpg" alt=""/>
                    <img className={styles.img} src="https://i.imgur.com/3fCnoVX.jpg" alt=""/>
                </div>
                <div className={styles.column}>
                    <img className={styles.img} src="https://i.imgur.com/lm6RPHu.jpg" alt=""/>
                    <img className={styles.img} src="https://i.imgur.com/NdzRZB6.jpg" alt=""/>
                </div>
                <div className={styles.column}>
                    <img className={styles.img} src="https://i.imgur.com/I7x4Ezx.jpg" alt=""/>
                    <img className={styles.img} src="https://i.imgur.com/2XiK6CN.jpg" alt=""/>
                </div>
                <div className={styles.column}>
                    <img className={styles.img} src="https://i.imgur.com/lUAa1CP.jpg" alt=""/>
                    <img className={styles.img} src="https://i.imgur.com/J6jHSjP.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Cases;
                    