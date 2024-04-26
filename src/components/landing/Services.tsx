import React from 'react';
import styles from "../../app/page.module.css";
import Image from 'next/image';
import { icons } from '@/exports/image';

const Services = () => {
    return (
        <div className={`${styles.services} row`}>
            <div className="col-5">
                <h3 className='mb-3'> <Image src={icons.whyChoose} alt="bullet point" /> &nbsp; Services</h3>

                <h2 className='mb-4'>From Vision to Reality</h2>

                <p>
                    Our services transcend the ordinary. From revolutionary digital experiences to immersive brand experiences and cutting-edge development, we sculpt brilliance into every pixel.
                </p>

            </div>

            <div className="col-7">
                <div className="row">
                    <div className={`${styles.craftingBrands} ${styles.serviceCard} col-6`}>
                        <Image src={icons.craftingBrands} alt="crafting brands icons" className='mb-4' />
                        <h3>Crafting Brands</h3>

                        <p className=''>
                            Brand story <br />
                            Visual identity <br />
                            Brand guidelines
                        </p>

                    </div>

                    <div className={`${styles.serviceCard} col-6`}>
                        <Image src={icons.UIUX} alt="crafting brands icons" className='mb-4' />
                        <h3>UI/UX</h3>

                        <p className=''>
                            User Interface Design <br />
                            User Experience Design <br />
                            Interaction Design <br />
                            UX Writing <br />
                            Research <br />
                            Design System
                        </p>
                    </div>

                    <div className={`${styles.serviceCard} col-6`}>
                        <Image src={icons.development} alt="crafting brands icons" className='mb-4' />
                        <h3>Development</h3>

                        <p className=''>
                            Mobile App Development <br />
                            Websites Design <br />
                            MVP <br />
                            Full-Stack Development <br />
                            <br />
                            <br />
                        </p>
                    </div>

                    <div className={`${styles.serviceCard} col-6`}>
                        <Image src={icons.modernProducts} alt="crafting brands icons" className='mb-4' />
                        <h3>Modern Products</h3>

                        <p className=''>
                            Fintech <br />
                            SaaS <br />
                            Edtech <br />
                            Web3
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services