import React from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'
import GithubLogo from '@/public/github-icon.png'
import InstagramLogo from '@/public/instagram-icon.png'
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
            </div>
            <p className={styles.para}>All it took to get me into the IT industry was a cellphone back in 2011.
                Even though it was a long time ago, I still remember how I used it to learn both hardware and software, plus the design.</p>
        </div>
    )
}

export default Hero
