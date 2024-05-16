import React from 'react';
import styles from "../../app/page.module.scss";
import Image from 'next/image';
import { images } from '@/exports/image';
import Button from '../reusables/Button';

import localFont from "@next/font/local";

// const satoshiBold = localFont({ src: "../../assets/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.woff" })

const CTA = () => {
    return (
        // <div className="container-fluid px-5">
            <div className={styles.rCtaContainer}>
                <div className={`${styles.rcta} px-2 px-lg-5 row`}>
                    <div className="col-12 col-md-6 py-2 py-lg-4 d-flex flex-column justify-content-center">
                        <h1 className='mb-2'>
                            Inspired by our work? Interested in collaborating on your next project?
                        </h1>
                        <p>
                            Contact us to discuss how Novodeus can bring your vision to life.
                        </p>
                        <div>
                        <Button text={"Let's Talk"} padding='4rem' className='my-3' />
                        </div>

                    </div>

                    <div className="col-12 col-md-6 pb-md-3">
                        <Image src={images.Mockup} alt="CTA Mockup" className='img-fluid'
                        data-aos="zoom-in" data-aos-duration="500" />
                    </div>
                </div>
            </div>
        // </div>

    )
}

export default CTA