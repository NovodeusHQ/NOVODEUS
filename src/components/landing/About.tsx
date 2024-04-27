import React from 'react';
import Image from 'next/image';
import styles from "../../app/page.module.scss";

import { images, icons } from '@/exports/image';

const About = () => {
    return (
        <div className='px-4'>
            <p className={styles.aboutTopText}>
                We&apos;re not just an agency; we&apos;re pioneers of design evolution. We sculpt digital landscapes, breathe life into brands, and engineer experiences that resonate.
            </p>

            <div className={styles.divider} >
                <hr className="" />
                <span className="divider-text ">We have designed and built products for</span>
                <hr className="" />
            </div>

            <div className="container-fluid row my-3">
                <div className="col-6 col-md-3 text-center mb-3 mb-md-0">
                    <Image src={images.FiberOne} alt="Fiber One Logo" />
                </div>

                <div className="col-6 col-md-3 text-center mb-3 mb-md-0">
                    <Image src={images.MiddleMan} alt="Middleman Logo" />
                </div>

                <div className="col-6 col-md-3 text-center mb-3 mb-md-0">
                    <Image src={images.IturaRx} alt="Itura Rx Logo" />
                </div>

                <div className="col-6 col-md-3 text-center mb-3 mb-md-0">
                    <Image src={images.Spraay} alt="Spraay Logo" />
                </div>
            </div>

            <div className="container-fluid row">
                <div className="col-12 col-lg-5 d-flex justify-content-center d-lg-block">
                    <Image src={images.WhyChoose} alt="Why Choose Novodeus" className='img-fluid' />
                </div>

                <div className={`${styles.whyChoose} col-12 col-lg-7 py-5`}>
                    <div className='mb-3'>
                        <h3 className='text-start'>
                            <Image src={icons.whyChoose} alt="bullet point" /> &nbsp; Why Choose Novodeus
                        </h3>

                        <h2 className=''>
                            Innovation-Fuelled Solutions Tailored for You
                        </h2>
                    </div>

                    <div>
                        <div className="row">
                            <div className="col-1 pe-0 pe-md-4">
                                <Image src={icons.tailoredSolutions} alt="bullet point" />
                            </div>
                            <div className='col-11 ps-5'>
                                <h4 className=''>
                                    Tailored Solutions for Your Vision
                                </h4>
                                <p className=''>
                                    We believe in the power of bespoke solutions. Our team works closely with you, understanding your vision, and tailoring strategies that bring your ideas to life in ways that surpass expectati
                                </p>
                            </div>

                            <div className="row">
                                <div className="col-1 pe-0 pe-md-4">
                                    <Image src={icons.checkeredBoard} alt="bullet point" />
                                </div>
                                <div className='col-11 ps-5'>
                                    <h4 className=''>
                                        Agile Methodologies for Rapid Results
                                    </h4>
                                    <p className=''>
                                        Novodeus operates with agility. We adapt swiftly to industry trends, ensuring timely delivery of solutions that stay ahead in a rapidly changing landscape.
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                    <div className="col-1 pe-0 pe-md-4">
                                        <Image src={icons.collaborative} alt="bullet point" />
                                    </div>
                                    <div className='col-11 ps-5'>
                                        <h4 className=''>
                                            Collaborative, Client-Centric Approach
                                        </h4>
                                        <p className=''>
                                            Your triumph is our focal point. We collaborate closely, placing you at the core of each decision to align strategies with your brand&apos;s aspirations.
                                        </p>
                                    </div>
                                </ div>



                        </div>


                    </div>
                </div>
            </div>

        </div>


    )
}

export default About