import React from 'react';
import styles from '../../app/explore/page.module.scss';
import Image from 'next/image';
import { images } from '@/exports/image';

const TopBanner = () => {
  return (
    <div className={styles.topBanner}>
        <hgroup className={styles.topBannerContent}>
            <h1 className=''>Explore Our <span className='text-hspan'>Projects</span></h1>
            <h2 className='mt-3'>Discover Innovation in Action</h2>
        </hgroup>
    </div>
  )
}

export default TopBanner