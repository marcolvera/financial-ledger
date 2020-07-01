import React from 'react';
import styles from './ShowCase.module.css'
import Nav from '../../components/Nav/Nav';
import ShowTxt from '../../components/ShowTxt/ShowTxt';

const ShowCase = () => {
    return (
        <div className={styles.background}>
            <Nav />
            <ShowTxt />
        </div>
    )
};

export default ShowCase;