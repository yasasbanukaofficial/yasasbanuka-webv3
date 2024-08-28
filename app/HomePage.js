import React from 'react'
import styles from './HomePage.module.css';
import Navbar from './components/common/Navbar';
import Hero from './components/organisms/Hero';
import About from './components/organisms/About';

const HomePage = () => {
    return (
        <>
            <div className={styles.Home}>
                <Navbar />
                <Hero />
            </div>
            <div className={styles.Home}>
                <About />
            </div>
        </>
    )
}

export default HomePage
