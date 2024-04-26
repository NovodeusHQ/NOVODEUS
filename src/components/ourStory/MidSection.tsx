import React from 'react';
import styles from '../../app/our-story/page.module.scss';
import Image from 'next/image';
import { images, icons } from '@/exports/image';

const MidSection = () => {
    return (
        <div className='px-5 py-5'>
            <hgroup className={styles.midHeader}>
                <h3 className='mb-1'>Who We are</h3>
                <p>We are innovators. We are creators. We are brand architects. Our aspiration is to craft the quintessential digital experience, resonating with users, and translating clients&apos; visions into captivating realities.</p>
            </hgroup>

            <div className="container-fluid row">
                <div className="why-choose py-5">
                    <h3 className='mb-3'>
                        Our Core Values
                    </h3>

                    <article className='row'>
                        <div className="col-12 col-md-7">
                            <div className="row">
                                <div className="col-1 pe-4">
                                    <Image src={icons.innovation} alt="bullet point" />
                                </div>
                                <div className='col-11 ps-5'>
                                    <h4 className=''>
                                        Innovation
                                    </h4>
                                    <p className=''>
                                        At Novodeus, innovation is our heartbeat. We embrace a culture that celebrates curiosity, pushing boundaries, and pioneering new solutions. Our commitment to innovation fuels our quest for creative excellence in every project we undertake.
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-1 pe-4">
                                    <Image src={icons.collaborative} alt="bullet point" />
                                </div>
                                <div className='col-11 ps-5'>
                                    <h4 className=''>
                                        Collaboration
                                    </h4>
                                    <p className=''>
                                        Collaboration is key. We foster a collaborative environment, valuing diverse perspectives and fostering strong partnerships, both internally and with our clients. We believe in partnering closely with clients, ensuring their vision remains at the heart of every project.
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-1 pe-4">
                                    <Image src={icons.excellence} alt="bullet point" />
                                </div>
                                <div className='col-11 ps-5'>
                                    <h4 className=''>
                                        Excellence
                                    </h4>
                                    <p className=''>
                                        Excellence is non-negotiable. Excellence is ingrained in everything we do. We uphold unwavering standards of quality, ensuring each project is a testament to our dedication and pursuit of perfection. We are relentless in our pursuit of delivering exceptional outcomes.
                                    </p>
                                </div>
                            </ div>

                        </div>

                        <div className="col-12 col-md-5">
                            <Image src={images.OurStoryMid} alt="Why Choose Novodeus" className='img-fluid' />
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default MidSection