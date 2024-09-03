import React from 'react';
import styles from './Tags.module.css'

const TagRed = (props) => {
    return (
        <div>
            <span className={styles.skillButton3}>{props.tagred}</span>
        </div>
    )
}

export default TagRed
