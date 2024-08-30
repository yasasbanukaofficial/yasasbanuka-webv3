import React from 'react';
import styles from './ToolsSection.module.css'

const ToolsSection = () => {
    return (
        <div className={styles.ToolsSection}>
            <span className={styles.skillButton1}>HTML - Advanced</span>
            <span className={styles.skillButton1}>CSS - Advanced</span>
            <span className={styles.skillButton2}>JavaScript - Proficient</span>
            <span className={styles.skillButton3}>React JS - Foundation</span>
            <span className={styles.skillButton3}>Next JS - Foundation</span>
        </div>
    )
}

export default ToolsSection
