import React from 'react';
import styles from "../../app/page.module.css";
import Image from 'next/image';
import { images } from '@/exports/image';
import Button from '../reusables/Button';

const HighlightedCTA = () => {
    return (
        <div className={styles.ctaContainer}>
            <div className={`${styles.cta} px-5 row`}>
                <div className="col-12 col-md-6 d-flex align-items-center">
                    <h1>Ready to Bring Your Vision to Life?
                        <br />
                        <Button text={"Let's Talk"} padding='4rem' />
                    </h1>

                </div>

                <div className="col-12 col-md-6">
                    <Image src={images.Mockup} alt="CTA Mockup" className='img-fluid' />
                </div>
            </div>
        </div>
    )
}

export default HighlightedCTA