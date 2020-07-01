import React from 'react';
import styles from './ShowTxt.module.css';
import { Link } from 'react-router-dom';


const ShowTxt = () => {
    return (
        <div className={styles.box}>
            <h1 className={styles.h1}>The Sky Is The Limit</h1>
            <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link className={styles.btn}>>Read More</Link>
        </div>
    )
}

export default ShowTxt;