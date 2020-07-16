import React from 'react';
import styles from './Post3.module.css';
import {Link} from 'react-router-dom';


const Card = () => {
    return (
        <div className={styles.row}>
            <div className={styles.column}>
                <div className={styles.column1}>
                    <img className={styles.img} src="https://i.imgur.com/jh6ZRfq.jpg" alt=""/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.column2}>
                    <h2 className={styles.h2}>Blog Post One</h2>
                    <h4 className={styles.h4}>Posted by Abe Salazar | July 22 2020</h4>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perspiciatis 
                    ea ullam quidem officiis, assumenda sunt ducimus, laudantiume quaerat deserunt soluta placeat dolorum, quis mollitia 
                    voluptates maiores saepe possimus velit quibusdam. Delectus perspiciatis expedita aliquid.</p>
                    <Link className={styles.btn}>READ MORE</Link>
                </div>
            </div>
        </div>
    )
}

export default Card