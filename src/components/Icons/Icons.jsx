import React from 'react';
import styles from './Icons.module.css';


const Icons = () => {
    return (
        <div className={styles.box}>
            <div className={styles.subBox}>
                <img className={styles.img} src="https://i.imgur.com/DKgdzsn.png" alt=""/>
                <h3 className={styles.h3}>Investment Banking</h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sapiente!</p>
            </div>
            <div className={styles.subBox}>
                <img className={styles.img} src="https://i.imgur.com/OeGnZ4i.png" alt=""/>
                <h3 className={styles.h3}>Portfolio Management</h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sapiente!</p>
            </div>
            <div className={styles.subBox}>
                <img className={styles.img} src="https://i.imgur.com/Mdi2oQJ.png" alt=""/>
                <h3 className={styles.h3}>Tax &amp; Custodial</h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sapiente!</p>
            </div>
        </div>
    )
}

export default Icons;
           