import React from 'react';
import styles from '../../app/contact-us/page.module.scss';
import Image from 'next/image';
import { images } from '@/exports/image';

const TopBanner = () => {
  return (
    <div className={styles.topBanner}>
        <div className={styles.topBannerContent}>
            <h1>Say <span className='text-hspan'>Hello</span></h1>
            <h2>Let&apos;s Bring Your Vision to Life</h2>
        </div>

        <Image src={images.ContactBannerShape} alt="top banner shape" />
    </div>
  )
}

export default TopBanner