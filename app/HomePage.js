import React from 'react'
import styles from './HomePage.module.css';
import Navbar from './components/common/Navbar';
import Hero from './components/organisms/Hero';
import About from './components/organisms/About';
import NavbarTab from './components/common/NavbarTab';

const HomePage = () => {
    return (
        <>
            <div className={styles.Home}>
                <Navbar />
                <Hero />
            </div>
            <div className={styles.HomeTab}>
                <NavbarTab />
                <Hero />
            </div>
            <div className={styles.AboutSection}>
                <About />
            </div>
        </>
    )
}

export default HomePage
