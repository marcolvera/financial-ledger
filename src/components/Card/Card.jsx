import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div className={styles.row}>
            <div className={styles.column}>
                <div className={styles.column1}>
                    <img className={styles.img} src="https://i.imgur.com/F3Hpfav.jpg" alt=""/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.column2}>
                    <h4 className={styles.h4}>What are you looking for</h4>
                    <h2 className={styles.h2}>We provide bespoken solutions</h2>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perspiciatis 
                    ea ullam quidem officiis, assumenda sunt ducimus, laudantium quaerat deserunt soluta placeat dolorum, quis mollitia 
                    voluptates maiores saepe possimus velit quibusdam. Delectus perspiciatis expedita aliquid.</p>
                    <Link className={styles.btn}>>READ MORE</Link>
                </div>
            </div>
        </div>
    )
}

export default Card
