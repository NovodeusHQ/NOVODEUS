import React from 'react';
import styles from '../../app/about-us/page.module.scss';
import Image from 'next/image';
import { images } from '@/exports/image';

const TopBanner = () => {
  return (
    <div className={styles.topBanner}>
        <hgroup className={styles.topBannerContent}>
            <h1>Our <span className={styles.hello}>Story</span></h1>
            <p className='mt-3'>At Novodeus, innovation is at the core of everything we do. Founded on the belief that design and technology can reshape industries, we embarked on a journey to redefine the digital experience.</p>
        </hgroup>

        <Image src={images.OurStoryShape} alt="top banner shape" />
    </div>
  )
}

export default TopBanner