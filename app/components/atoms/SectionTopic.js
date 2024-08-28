import React from 'react'
import styles from './SectionTopic.module.css'

const SectionTopic = (props) => {
    return (
        <div className={styles.SectionTopic}>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Bruno+Ace&family=Bruno+Ace+SC&family=Bungee&family=Cabin+Condensed:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <span style={{ 'font-family': 'Bruno Ace' }} className={styles.title}>{props.f1}</span>
            <span style={{ 'font-family': 'Bruno Ace' }} className={styles.title}>{props.f2}</span>
            <span style={{ 'font-family': 'Bruno Ace' }} className={styles.title}>{props.f3}</span>
            <span style={{ 'font-family': 'Bruno Ace' }} className={styles.title}>{props.f4}</span>
            <span style={{ 'font-family': 'Bruno Ace' }} className={styles.title}>{props.f5}</span>
            <span style={{ 'font-family': 'Bruno Ace' }} className={styles.title}>{props.f6}</span>
            <span style={{ 'font-family': 'Bruno Ace' }} className={styles.title}>{props.f7}</span>
            <span style={{ 'font-family': 'Bruno Ace' }} className={styles.title}>{props.f8}</span>
            <span style={{ 'font-family': 'Bruno Ace' }} className={styles.title}>{props.f9}</span>
            <span style={{ 'font-family': 'Bruno Ace' }} className={styles.title}>{props.f10}</span>
            <span style={{ 'font-family': 'Bruno Ace' }} className={styles.title}>{props.f11}</span>
            <span style={{ 'font-family': 'Bruno Ace' }} className={styles.title}>{props.f12}</span>
        </div>
    )
}

export default SectionTopic
