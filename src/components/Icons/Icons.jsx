import React from 'react';
import styles from './Icons.module.css';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import GroupIcon from '@material-ui/icons/Group';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

const Icons = () => {
    return (
        <div className={styles.box}>
            <div className={styles.subBox}>
                <SportsEsportsIcon className={styles.icon} color="action" style={{ fontSize: 90 }} />
                <h3 className={styles.h3}>ESPORT</h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sapiente!</p>
            </div>
            <div className={styles.subBox}>
                <GroupIcon className={styles.icon} color="action" style={{ fontSize: 90 }} />
                <h3 className={styles.h3}>TEAM</h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sapiente!</p>
            </div>
            <div className={styles.subBox}>
                <EmojiEventsIcon className={styles.icon} color="action" style={{ fontSize: 90 }}  />
                <h3 className={styles.h3}>WIN</h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sapiente!</p>
            </div>
        </div>
    )
}

export default Icons;
           