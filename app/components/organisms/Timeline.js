import React from 'react'
import Image from 'next/image'
import styles from './Timeline.module.css'
import SectionTopic from '../atoms/SectionTopic'

const Timeline = () => {
    return (
        <div className={styles.main}>
            <div id='track' className={styles.Timeline}>
                <SectionTopic f1='T' />
                <SectionTopic f1='r' />
                <SectionTopic f1='a' />
                <SectionTopic f1='c' />
                <SectionTopic f1='k' />
                <div className={styles.line} />
            </div>
        </div>
    )
}

export default Timeline
