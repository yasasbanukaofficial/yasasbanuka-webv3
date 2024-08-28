import React from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'
import GithubLogo from '@/public/github-icon.png'
import InstagramLogo from '@/public/instagram-icon.png'
import LinkedinLogo from '@/public/linkedin-logo.png'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.name}>Yasas Banuka</h1>
            <h3 className={styles.heroDescription}>Just a random student</h3>
            <div className={styles.socials}>
                <Link href='https://www.github.com/yasasbanukaofficial' target='_blank'>
                    <Image
                        src={GithubLogo}
                        alt='github-logo'
                        className={styles.socialButton}
                    />
                </Link>
                <Link href='https://www.instagram.com/yixbee/' target='_blank'>
                    <Image
                        src={InstagramLogo}
                        alt='instagram-logo'
                        className={styles.socialButton}
                    />
                </Link>
                <Link href='https://www.instagram.com/yixbee/' target='_blank'>
                    <Image
                        src={LinkedinLogo}
                        alt='instagram-logo'
                        className={styles.socialButton}
                    />
                </Link>
            </div>
            <p className={styles.para}>All it took to get me into the <span style={{ color: '#E01A4F' }}>IT industry</span> was a <span style={{ color: '#78FECF' }}>cellphone</span> back in <span style={{ color: '#F9E900' }}>2011.</span><br />
                Even though it was a long time ago, I remember using that cellphone to learn about IT for the first time. It sparked my interest and led me to pursue a career in IT.</p>
        </div>
    )
}

export default Hero
