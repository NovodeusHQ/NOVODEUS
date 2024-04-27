'use client'
import React from 'react';
import Image from 'next/image';
import { images } from '@/exports/image';
import styles from '../../app/contact-us/page.module.scss';
import ImportBootstrap from '../reusables/ImportBoostrap';

const WhatClientsSay = () => {
    return (
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
            <ImportBootstrap />

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='container-fluid py-5 d-flex flex-column justify-content-center align-items-center'>
                        <hgroup className={`${styles.whatClientsSay} mb-4`}>
                            <h3 className='text-center'>What Clients Say:</h3>
                            <p>Our clients&apos; success stories speak volumes</p>
                        </hgroup>

                        <div className={`${styles.clientAvatar} text-center mb-2`}>
                            <Image src={images.ClientAvatar} alt="client avatar" />
                            <p>Your triumph is our focal point. We collaborate closely, placing you at the core of each decision to align strategies with your brand&apos;s aspirations.</p>
                        </div>

                        <hgroup className={styles.clientName}>
                            <h4>Uche Cole</h4>
                            <p className='text-center'>CEO, Spraay </p>
                        </hgroup>
                    </div>
                </div>
                <div className="carousel-item">
                    Slide 2
                </div>

            </div>
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}
        </div>


    )
}

export default WhatClientsSay