import React from 'react';
import styles from "../../app/page.module.scss";
import Image from "next/image";
// import TopBannerImage from "../../assets/svgs/TopBannerImage.svg";
import { images } from "../../exports/image";
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
                    <Link href='/contact-us' className='no-link-underline text-white'>Contact Us</Link>
                </button>
            </div>

            <div className="col-12 col-lg-6 mt-5 mt-lg-0 mx-5 mx-lg-0 landing-banner-image-container show-border">
                {/* <Image src={TopBannerImage} alt="banner image" className='img-fluid' data-aos="zoom-in" data-aos-duration='1200' /> */}
                <Image src={images.PurpleLandingBannerImage} alt="banner image" className='img-fluid landing-banner-image image1' />
                <Image src={images.YellowLandingBannerImage} alt="banner image" className='img-fluid landing-banner-image image2' />
                <Image src={images.CoverLandingBannerImage} alt="banner image" className='img-fluid landing-banner-image image3' />
            </div>
        </div>
    )
}

export default TopBanner