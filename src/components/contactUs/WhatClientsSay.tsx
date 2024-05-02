'use client'

import React from 'react';
import Image from 'next/image';
import { images } from '@/exports/image';
import styles from '../../app/contact-us/page.module.scss';
import ImportBootstrap from '../reusables/ImportBoostrap';
import { IClientTestimonial } from '@/types/dataObjs';
import Testimonial from './Testimonial';

const WhatClientsSay = () => {

    const testimonials: Array<IClientTestimonial> = [
        {
            clientName: "Uche Cole",
            clientRole: "CEO, Spraay",
            clientTestimony: "Your triumph is our focal point. We collaborate closely, placing you at the core of each decision to align strategies with your brand's aspirations.",
            clientAvatar: images.ClientAvatar
        },
        {
            clientName: "Tony Montana",
            clientRole: "CTO, Coinbase.",
            clientTestimony: "Your triumph is our focal point. We collaborate closely, placing you at the core of each decision to align strategies with your brand's aspirations.",
            clientAvatar: images.ClientAvatar
        }
    ];

    return (
        <div className="container-fluid pt-5 pb-3">
            <hgroup className={`${styles.whatClientsSay}`}>
                <h3 className='text-center'>What Clients Say:</h3>
                <p>Our clients&apos; success stories speak volumes</p>
            </hgroup>

            <div
                // id="carouselExampleControlsNoTouching"
                id="carouselExampleIndicators"
                className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <ImportBootstrap />

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    {testimonials.map((testimonial, idx) => {
                        return (
                            <Testimonial testimonial={testimonial} key={idx} active={idx === 0}/>
                        )
                    })}
                </div>

                {/* == Nav buttons == */}
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}
            </div>
        </div>
    )
}

export default WhatClientsSay