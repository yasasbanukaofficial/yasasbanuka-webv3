import React from 'react'
import styles from './AboutSection.module.css'
import ToolsSection from './ToolsSection'

const AboutSection = () => {
    return (
        <div className={styles.AboutSection}>
            <h1 className={styles.h1}>Hi There, I am<br /> <br /><span className={styles.span1}>Yasas</span><span className={styles.span2}> Banuka</span></h1>
            <p className={styles.para}>
                I love creating things that not only push my <span className={styles.span3}>creativity</span> but also make a difference online.<br /> My journey into the IT world started back in 2011 when I got my hands on an old, yet fascinating smartphone. Diving into its software and hardware opened my eyes to the possibilities of technology. That <span className={styles.span4}>experience</span> ignited a <span className={styles.span5}>passion</span> in me, setting me on the path that has brought me to where I am today.
            </p>
            <div className={styles.skills}>
                <p className={styles.skilltitle}>Here are some tools and technologies that I know</p>
                <ToolsSection />
            </div>
        </div>
    )
}

export default AboutSection
