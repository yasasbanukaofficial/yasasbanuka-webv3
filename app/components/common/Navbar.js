import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <Link className={styles.link} href='/'>Home</Link>
            <Link className={styles.link} href='#about' scroll={true}>About Me</Link>
            <Link className={styles.link} href='#track' scroll={true}>Track</Link>
            <Link className={styles.link} href='#projects' scroll={true}>Projects</Link>
        </div>
    )
}

export default Navbar
