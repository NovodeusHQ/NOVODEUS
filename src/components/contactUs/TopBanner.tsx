import React from 'react';
import styles from '../../app/contact-us/page.module.scss';
import Image from 'next/image';
import { images } from '@/exports/image';

const TopBanner = () => {
  return (
    <div className={`${styles.topBanner} d-flex flex-column flex-lg-row`}>
        <hgroup className={`${styles.topBannerContent} mb-3`}>
            <h1>Say <span className='text-hspan'>Hello</span></h1>
            <h2>Let&apos;s Bring Your Vision to Life</h2>
        </hgroup>

        <Image src={images.ContactBannerShape} alt="top banner shape" data-aos="slide-down" data-aos-duration="500" data-aos-anchor={styles.topBannerContent} />
    </div>
  )
}

export default TopBanner