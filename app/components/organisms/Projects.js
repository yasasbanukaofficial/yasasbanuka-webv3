import React from 'react'
import Image from 'next/image'
import styles from './Projects.module.css'
import SectionTopic from '../atoms/SectionTopic'
import TagsBlue from '../atoms/TagsBlue'
import TagYellow from '../atoms/TagYellow'
import TagRed from '../atoms/TagRed'
import ProjectTile from '../molecules/ProjectTile'

const Project = () => {
    return (
        <div className={styles.main}>
            <div id='projects' className={styles.Projects}>
                <SectionTopic f1='P' />
                <SectionTopic f1='r' />
                <SectionTopic f1='o' />
                <SectionTopic f1='j' />
                <SectionTopic f1='e' />
                <SectionTopic f1='c' />
                <SectionTopic f1='t' />
                <SectionTopic f1='s' />
                <div className={styles.line} />
            </div>
            <div className={styles.projectTileContainer}>
                <ProjectTile />
            </div>
        </div>
    )
}

export default Project
