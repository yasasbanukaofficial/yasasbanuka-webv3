import React from 'react'
import styles from './TrackRecords.module.css'

const TrackRecords = (props) => {
    return (
        <div className={styles.TrackRecords}>
            <div className={styles.container}>
                <h3 className={styles.year}>{props.year}</h3>
                <h1 className={styles.title}>{props.title}</h1>
                <p className={styles.description}>{props.description}</p>
                <span className={styles.skillButton1}>{props.tag}</span>
            </div>
        </div>
    )
}

export default TrackRecords
