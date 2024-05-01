import React from 'react';
import styles from '../../app/about-us/page.module.scss';
import Image from 'next/image';
import { images, icons } from '@/exports/image';
import { IListItem } from '@/types/dataObjs';
import HeadedList from '../reusables/HeadedList';

const MidSection = () => {

    const coreValues: Array<IListItem> = [
        {
            header: "Innovation",
            paragraph: " At Novodeus, innovation is our heartbeat. We embrace a culture that celebrates curiosity, pushing boundaries, and pioneering new solutions. Our commitment to innovation fuels our quest for creative excellence in every project we undertake.",
            bulletImage: icons.innovation
        },
        {
            header: "Collaboration",
            paragraph: "Collaboration is key. We foster a collaborative environment, valuing diverse perspectives and fostering strong partnerships, both internally and with our clients. We believe in partnering closely with clients, ensuring their vision remains at the heart of every project.",
            bulletImage: icons.collaborative
        },
        {
            header: "Excellence",
            paragraph: "Excellence is non-negotiable. Excellence is ingrained in everything we do. We uphold unwavering standards of quality, ensuring each project is a testament to our dedication and pursuit of perfection. We are relentless in our pursuit of delivering exceptional outcomes.",
            bulletImage: icons.excellence
        }
    ];

    return (
        <div className='px-2 py-3 px-lg-5 py-lg-5'>
            <hgroup className={styles.midHeader}>
                <h3 className='mb-1'>Who We are</h3>
                <p>We are innovators. We are creators. We are brand architects. Our aspiration is to craft the quintessential digital experience, resonating with users, and translating clients&apos; visions into captivating realities.</p>
            </hgroup>

            <article className={`${styles.coreValues} container-fluid row`}>
                <div className="col-12 col-md-7 px-0 d-flex flex-column align-items-start">
                    <h3 className='mb-2 mx-1'>
                        Our Core Values
                    </h3>

                    <div className="row px-3">
                        {coreValues.map((coreValue, idx) => {
                            return (
                                <HeadedList listItem={coreValue} key={idx} />
                            )
                        })}
                    </ div>
                </div>

                <div className="col-12 col-md-5">
                    <Image src={images.OurStoryMid} alt="Why Choose Novodeus" className='img-fluid' data-aos="zoom-in"/>
                </div>


            </article>
        </div>
    )
}

export default MidSection