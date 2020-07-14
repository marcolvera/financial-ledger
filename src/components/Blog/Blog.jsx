import React from 'react';
import styles from './Blog.module.css';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className={styles.row}>
            <div className={styles.column}>
                <div className={styles.column2}>
                    <h4 className={styles.h4}>July 4 2020</h4>
                    <h2 className={styles.h2}>Blog Post One</h2>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perspiciatis 
                    ea ullam quidem officiis, assumenda sunt ducimus, laudantiume quaerat deserunt soluta placeat dolorum, quis mollitia 
                    voluptates maiores saepe possimus velit quibusdam. Delectus perspiciatis expedita aliquid.</p>
                    <Link className={styles.btn}>READ OUR BLOG</Link>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.column1}>
                    <img className={styles.img} src="https://i.imgur.com/MymeI1w.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Blog
        
