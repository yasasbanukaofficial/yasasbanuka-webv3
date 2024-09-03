import React from 'react';
import styles from './Tags.module.css'

const TagYellow = (props) => {
    return (
        <div>
            <span className={styles.skillButton2}>{props.tagyellow}</span>
        </div>
    )
}

export default TagYellow
