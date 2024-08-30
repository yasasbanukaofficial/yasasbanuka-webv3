import React from 'react'
import styles from './About.module.css'
import SectionTopic from '../atoms/SectionTopic'
import AboutSection from '../molecules/AboutSection'

const About = () => {
    return (
        <div className={styles.main}>
            <div id='about' className={styles.About}>
                <SectionTopic f1='A' />
                <SectionTopic f1='b' />
                <SectionTopic f1='o' />
                <SectionTopic f1='u' />
                <SectionTopic f1='t' />
                <div className={styles.line} />
            </div>
            <AboutSection />
        </div>
    )
}

export default About
