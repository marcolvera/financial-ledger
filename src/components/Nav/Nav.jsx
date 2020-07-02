import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
    return(
        <div>
            <div className={styles.nav}>
                <div>
                    <Link className={styles.logo} to='/'><span>E</span>GAMES</Link>
                </div>
                <div>
                    <Link className={styles.link}>HOME</Link>
                    <Link className={styles.link}>ABOUT</Link>
                    <Link className={styles.link}>MEDIA</Link>
                    <Link className={styles.link}>PLAYERS</Link>
                    <Link className={styles.link}>CONTACT</Link>
                </div>
            </div>
        </div>
    )
};

export default Nav
