import React from 'react'
import styles from './NavbarTab.module.css'
import Link from 'next/link'

const NavbarTab = () => {
    return (
        <div className={styles.NavbarTab}>
            <Link className={styles.linkTab} href='/'>Home</Link>
            <Link className={styles.linkTab} href='#about' scroll={true}>About</Link>
            <Link className={styles.linkTab} href='#track' scroll={true}>Track</Link>
            <Link className={styles.linkTab} href='#projects' scroll={true}>Projects</Link>
        </div>
    )
}

export default NavbarTab
