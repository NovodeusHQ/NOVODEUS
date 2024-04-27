import React from 'react';
import styles from "../../app/page.module.scss";
import Image from 'next/image';
import { images } from '@/exports/image';
import Button from '../reusables/Button';

const CTA = () => {
    return (
        // <div className="container-fluid px-5">
            <div className={styles.rCtaContainer}>
                <div className={`${styles.rcta} px-5 py-4 row`}>
                    <div className="col-12 col-md-6 d-flex flex-column">
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

                    <div className="col-12 col-md-6">
                        <Image src={images.Mockup} alt="CTA Mockup" className='img-fluid' />
                    </div>
                </div>
            </div>
        // </div>

    )
}

export default CTA