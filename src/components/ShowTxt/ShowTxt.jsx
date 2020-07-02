import React from 'react';
import styles from './ShowTxt.module.css';
import { Link } from 'react-router-dom';


const ShowTxt = () => {
    return (
        <div className={styles.box}>
            <h1 className={styles.h1}>DEFY THE LIMITS</h1>
            <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link className={styles.btn}>>READ MORE</Link>
        </div>
    )
}

export default ShowTxt;