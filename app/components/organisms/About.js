import React from 'react'
import Image from 'next/image'
import ProfilePic from '@/public/profile.jpg'
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
            <Image
                src={ProfilePic}
                alt='profilepic'
                className={styles.profilepic}
            />
        </div>
    )
}

export default About
