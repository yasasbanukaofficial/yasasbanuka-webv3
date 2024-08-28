import React from 'react'
import styles from './NavbarTab.module.css'
import Link from 'next/link'

const NavbarTab = () => {
    return (
        <div className={styles.NavbarTab}>
            <Link className={styles.linkTab} href='/'>Home</Link>
            <Link className={styles.linkTab} href='#about' scroll={true}>About</Link>
            <Link className={styles.linkTab} href='/'>Timeline</Link>
            <Link className={styles.linkTab} href='/'>Projects</Link>
        </div>
    )
}

export default NavbarTab
