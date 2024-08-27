import React from 'react'
import styles from './HomePage.module.css';
import Navbar from './components/common/Navbar';
import Hero from './components/organisms/Hero';

const HomePage = () => {
    return (
        <div className={styles.Home}>
            <Navbar />
            <Hero />
        </div>
    )
}

export default HomePage
