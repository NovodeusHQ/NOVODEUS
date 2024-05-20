'use client'

import React, { useState } from 'react';
import styles from "../../app/page.module.scss";
import Image from 'next/image';
import { icons } from '@/exports/image';
import Button from '../reusables/Button';

import CraftingBrands from './assets/CraftingBrands';
import UIUX from './assets/UIUX';
import Development from './assets/Development';
import ModernProducts from './assets/ModernProducts';

const Services = () => {

    const [activeCard, setActiveCard] = useState(0);

    const handleMouseEnter = (index: number) => {
        setActiveCard(index);
    };

    const cards = [
        {
            component: <CraftingBrands className="mb-4" />,
            title: "Crafting Brands",
            description: "Brand story <br /> Visual identity <br /> Brand guidelines",
        },
        {
            component: <UIUX className="mb-4" />,
            title: "UI/UX",
            description:
                "User Interface Design <br /> User Experience Design <br /> Interaction Design <br /> UX Writing <br /> Research <br /> Design System",
        },
        {
            component: <Development className="mb-4" />,
            title: "Development",
            description:
                "Mobile App Development <br /> Websites Design <br /> MVP <br /> Full-Stack Development <br /> <br /> <br />",
        },
        {
            component: <ModernProducts className="mb-4" />,
            title: "Modern Products",
            description: "Fintech <br /> SaaS <br /> Edtech <br /> Web3",
        },
    ];

    return (
        <div className={`${styles.services} row`}>
            <div className="col-12 col-lg-5 px-3 px-lg-0">
                <h3 className='mt-4 mt-lg-0 mb-3 text-start fw-bold'> <Image src={icons.whyChoose} alt="bullet point" /> &nbsp; Services</h3>

                <h2 className='mb-4 fw-bold'>From Vision to Reality</h2>

                <p className='my-0'>
                    Our services transcend the ordinary. From revolutionary digital experiences to immersive brand experiences and cutting-edge development, we sculpt brilliance into every pixel.
                </p>

                <Button text='Start a Project' padding='2rem' className='my-5 mb-lg-0' />
            </div>


            <div className="col-12 col-lg-7">
                <div className="row">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`${styles.serviceCard} col-6 ${activeCard === index ? styles.activeCard : ''
                                }`}
                            onMouseEnter={() => handleMouseEnter(index)}
                        >
                            {card.component}
                            <h3>{card.title}</h3>
                            <p dangerouslySetInnerHTML={{ __html: card.description }}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services