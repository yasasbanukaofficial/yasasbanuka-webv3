import React from 'react'
import styles from './Tags.module.css'

const TagsBlue = (props) => {
    return (
        <div>
            <span className={styles.skillButton1}>{props.tagblue}</span>
        </div>
    )
}

export default TagsBlue
