import React from 'react'
import Image from 'next/image'
import styles from './Timeline.module.css'
import SectionTopic from '../atoms/SectionTopic'
import TrackRecords from '../molecules/TrackRecords'

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
            <div className={styles.trackContainer}>
                <div className={styles.trackdetails}>
                    <TrackRecords year='2024 Aug - Present' />
                    <TrackRecords title='Graduate Diploma in Software Engineering' />
                    <TrackRecords description='Currently pursuing a 2-year diploma in software engineering at a private institution. This program not only covers university-level academics but also includes a 6-month industry training period, giving me valuable hands-on experience. After completing the diploma, I will receive the benefit of pursuing the final year of a Bsc (Hons.) in Computer Science' />
                    <div className={styles.tags}>
                        <TrackRecords tags='Diploma' />
                        <TrackRecords tags='Software Engineering' />
                    </div>
                </div>
                <div className={styles.trackdetails}>
                    <TrackRecords year='2024 Aug - Present' />
                    <TrackRecords title='Graduate Diploma in Software Engineering' />
                    <TrackRecords description='Currently pursuing a 2-year diploma in software engineering at a private institution. This program not only covers university-level academics but also includes a 6-month industry training period, giving me valuable hands-on experience. After completing the diploma, I will receive the benefit of pursuing the final year of a Bsc (Hons.) in Computer Science' />
                    <div className={styles.tags}>
                        <TrackRecords tags='Diploma' />
                        <TrackRecords tags='Software Engineering' />
                    </div>
                </div>
                <div className={styles.trackdetails}>
                    <TrackRecords year='2024 Aug - Present' />
                    <TrackRecords title='Graduate Diploma in Software Engineering' />
                    <TrackRecords description='Currently pursuing a 2-year diploma in software engineering at a private institution. This program not only covers university-level academics but also includes a 6-month industry training period, giving me valuable hands-on experience. After completing the diploma, I will receive the benefit of pursuing the final year of a Bsc (Hons.) in Computer Science' />
                    <div className={styles.tags}>
                        <TrackRecords tags='Diploma' />
                        <TrackRecords tags='Software Engineering' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Timeline
