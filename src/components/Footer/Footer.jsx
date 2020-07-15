import React from 'react';
import styles from './Footer.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { green } from '@material-ui/core/colors';

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <FacebookIcon style={{ fontSize: 50, color: green[500] }}/>
                <TwitterIcon style={{ fontSize: 50, color: green[500] }}/>
                <YouTubeIcon style={{ fontSize: 50, color: green[500] }}/>
                <LinkedInIcon style={{ fontSize: 50, color: green[500] }}/>
            </div>
            <p className={styles.p}>Copyright&copy;2020 Ledger-page</p>
        </div>
    );
}

export default Footer;
