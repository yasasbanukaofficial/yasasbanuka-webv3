import React from 'react'
import styles from './ProjectTile.module.css'
import TagsBlue from '../atoms/TagsBlue'

const ProjectTile = (props) => {
  return (
    <div className={styles.ProjectTile}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.tags}>
      <TagsBlue tagblue='testing'/>
      </div>
    </div>
  )
}

export default ProjectTile