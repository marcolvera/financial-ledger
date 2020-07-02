import React from 'react';
import styles from './Card.module.css';

const Card = () => {
    return (
        <div className={styles.row}>
            <div className={styles.column}>
                <div className={styles.column1}>
                    <img src="https://i.imgur.com/DywFUYq.jpg" alt=""/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.column2}>
                    <h4>What are you looking for</h4>
                    <h2>We provide bespoken solutions</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis 
                        quas atque quidem deserunt magnam exercitationem possimus dicta velit saepe.</p>
                </div>
            </div>
        </div>
    )
}

export default Card
