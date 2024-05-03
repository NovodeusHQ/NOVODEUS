import React from 'react';
import Image from 'next/image';
import { images } from '@/exports/image';
import styles  from "../../app/our-projects/spraay/page.module.scss";

const TopSection = () => {
  return (
    <div className={styles.topSection}>
        <button className='btn rounded-pill'>
            Fintech
        </button>

        <h1 className='mt-3 mb-4 mb-md-5'>
            Spraay App
        </h1>

        <Image src={images.ProjectCoverPlaceholder} alt="project cover photo" className='img-fluid' data-aos="zoom-in"  data-aos-duration="1000" />
    </div>
  )
}

export default TopSection