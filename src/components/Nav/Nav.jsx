import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
    return(
        <div>
            <div className={styles.nav}>
                <div>
                    <Link to='/'>Ledger</Link>
                </div>
                <div>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                </div>
            </div>
        </div>
    )
};

export default Nav
