import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
    return(
        <div>
            <div className={styles.nav}>
                <div>
                    <Link className={styles.logo} to='/'><span>Flex</span> Ledger</Link>
                </div>
                <div>
                    <Link className={styles.link} to='/'>HOME</Link>
                    <Link className={styles.link}>ABOUT</Link>
                    <Link className={styles.link}>CASES</Link>
                    <Link className={styles.link} to='/blog'>BLOG</Link>
                    <Link className={styles.link}>CONTACT</Link>
                </div>
            </div>
        </div>
    )
};

export default Nav
