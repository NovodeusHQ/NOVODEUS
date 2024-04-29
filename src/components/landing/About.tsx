import React from 'react';
import Image from 'next/image';
import styles from "../../app/page.module.scss";
import { IListItem } from '@/types/dataObjs';

import { images, icons } from '@/exports/image';
import HeadedList from '../reusables/HeadedList';

const About = () => {

    const listItems: Array<IListItem> = [
        {
            header: "Tailored Solutions for Your Vision",
            paragraph: "We believe in the power of bespoke solutions. Our team works closely with you, understanding your vision, and tailoring strategies that bring your ideas to life in ways that surpass expectations.",
            bulletImage: icons.tailoredSolutions
        },
        {
            header: "Agile Methodologies for Rapid Results",
            paragraph: "Novodeus operates with agility. We adapt swiftly to industry trends, ensuring timely delivery of solutions that stay ahead in a rapidly changing landscape.",
            bulletImage: icons.checkeredBoard
        },
        {
            header: "Collaborative, Client-Centric Approach",
            paragraph: "Your triumph is our focal point. We collaborate closely, placing you at the core of each decision to align strategies with your brand&apos;s aspirations.",
            bulletImage: icons.collaborative
        }
    ];

    return (
        <div className='px-3 px-lg-4'>
            <p className={styles.aboutTopText}>
                We&apos;re not just an agency; we&apos;re pioneers of design evolution. We sculpt digital landscapes, breathe life into brands, and engineer experiences that resonate.
            </p>

            <div className={styles.divider} >
                <hr className="" />
                <span className="divider-text ">We have designed and built products for</span>
                <hr className="" />
            </div>

            <div className="container-fluid row my-3" data-aos="slide-right">
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

            <div className="row">
                <div className="col-12 col-md-5 d-flex justify-content-center d-lg-block">
                    <Image src={images.WhyChoose} alt="Why Choose Novodeus" className='img-fluid' data-aos="zoom-in" />
                </div>

                <div className={`${styles.whyChoose} col-12 col-md-7 py-5 contaiber-fluid`}>
                    <div className='mb-3'>
                        <h3 className='text-start'>
                            <Image src={icons.whyChoose} alt="bullet point" /> &nbsp; Why Choose Novodeus
                        </h3>

                        <h2 className=''>
                            Innovation-Fuelled Solutions Tailored for You
                        </h2>
                    </div>

                    <div className='mx-0'>
                        {listItems.map((item, idx) => {
                            return (
                                <HeadedList listItem={item} key={idx} />
                            )
                        })}
                    </div>


                </div>
            </div>
        </div>

    )
}

export default About