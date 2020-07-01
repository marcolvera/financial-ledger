import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
    return(
        <div>
            <div className={styles.nav}>
                <div>
                    <Link className={styles.logo} to='/'><span>Fin</span> Ledger</Link>
                </div>
                <div>
                    <Link className={styles.link}>Home</Link>
                    <Link className={styles.link}>About</Link>
                    <Link className={styles.link}>Cases</Link>
                    <Link className={styles.link}>Blog</Link>
                    <Link className={styles.link}>Contact</Link>
                </div>
            </div>
        </div>
    )
};

export default Nav
