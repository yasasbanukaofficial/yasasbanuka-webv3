import React from 'react'
import Image from 'next/image'
import styles from './Timeline.module.css'
import SectionTopic from '../atoms/SectionTopic'
import TrackRecords from '../molecules/TrackRecords'
import TagsBlue from '../atoms/TagsBlue'
import TagYellow from '../atoms/TagYellow'
import TagRed from '../atoms/TagRed'

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
                    <TrackRecords year='2027 - 2028 ( Future )' />
                    <TrackRecords title='BSc (Hons.) in Computer Science' />
                    <TrackRecords description='Upon completing the 2-year diploma, I am now planning to pursue a BSc (Hons.) in Computer Science. ' />
                    <div className={styles.tags}>
                        <TagsBlue tagblue='Degree' />
                        <TagYellow tagyellow='Bachelors' />
                        <TagRed tagred='Software Engineer' />
                    </div>
                </div>
                <div className={styles.trackdetails}>
                    <TrackRecords year='2024 Aug - Present' />
                    <TrackRecords title='Graduate Diploma in Software Engineering' />
                    <TrackRecords description='Currently pursuing a 2-year diploma in software engineering at a private institution. This program not only covers university-level academics but also includes a 6-month industry training period, giving me valuable hands-on experience. After completing the diploma, I will receive the benefit of pursuing the final year of a BSc (Hons.) in Computer Science' />
                    <div className={styles.tags}>
                        <TagsBlue tagblue='Graduate Diploma' />
                        <TagYellow tagyellow='Software Engineer' />
                        <TagRed tagred='Industrial Placement' />
                    </div>
                </div>
                <div className={styles.trackdetails}>
                    <TrackRecords year='2010 - 2024 May' />
                    <TrackRecords title='Academic Life in School' />
                    <TrackRecords description='Throughout these years, I attended an international English medium school where I studied nine subjects, including Maths, Science, and ICT. I completed my final exams (G.C.E. Ordinary Levels) at the end of May, and the results will be released in September 2024.' />
                    <div className={styles.tags}>
                        <TagsBlue tagblue='Academics' />
                        <TagYellow tagyellow='School Life' />
                        <TagRed tagred='Ordinary Level' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Timeline
