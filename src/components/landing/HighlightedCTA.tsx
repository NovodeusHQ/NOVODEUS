import React from 'react';
import styles from "../../app/page.module.scss";
import Image from 'next/image';
import { images } from '@/exports/image';
import Button from '../reusables/Button';

import localFont from "@next/font/local";

const satoshiBold = localFont({ src: "../../assets/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.woff" });

const HighlightedCTA = () => {
    return (
        <div className={styles.ctaContainer}>
            <div className={`${styles.cta} px-3 py-3 px-lg-5 row`}>
                <div className="col-12 col-md-6 d-flex align-items-center">
                    <h1 className={satoshiBold.className}>Ready to Bring Your Vision to Life?
                        <br />
                        <Button text={"Let's Talk"} padding='4rem' className='mt-3 mt-md-0'/>
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