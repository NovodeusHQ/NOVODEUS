import React from 'react';
import styles from "../../app/page.module.scss";
import Image from "next/image";
import TopBannerImage from "../../assets/svgs/TopBannerImage.svg";
import Link from 'next/link';

const TopBanner = () => {
    return (
        <div className={`${styles.topBanner} container-fluid row mx-0`}>
            <div className="col-12 col-lg-6">
                <h1 className='text-white fw-bold'>
                    We Turn Ideas into <br />
                    <span className={styles.immersive}>Immersive</span> <br />
                    Experiences
                </h1>
                <p className="lead text-white mt-3">
                    Crafting Brands, Engineering Experiences, Pioneering Design Evolution
                </p>

                <button type='button' className={`${styles.topBannerBtn} rounded-pill my-0`}
                >
                    <Link href='/contact-us' className='no-link-underline text-white'>Button</Link>
                </button>
            </div>

            <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                <Image src={TopBannerImage} alt="banner image" className='img-fluid' data-aos="zoom-in" data-aos-duration='1200' />
            </div>
        </div>
    )
}

export default TopBanner