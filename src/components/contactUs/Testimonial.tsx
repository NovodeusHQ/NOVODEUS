import React from 'react';
import styles from '../../app/contact-us/page.module.scss';
import Image from 'next/image';
import { ITestimonial } from '@/types/components';

const Testimonial: React.FC<ITestimonial> = ({
    testimonial,
    active
}) => {
    return (
        <div className={`carousel-item ${active ? 'active' : ''}`}>
            <div className='container-fluid pb-5 d-flex flex-column justify-content-center align-items-center'>
                <div className={`${styles.clientAvatar} text-center mb-2`}>
                    <Image src={testimonial.clientAvatar} alt="client avatar" />
                    <p>{testimonial.clientTestimony}</p>
                </div>

                <hgroup className={styles.clientName}>
                    <h4>{testimonial.clientName}</h4>
                    <p className='text-center'>{testimonial.clientRole}</p>
                </hgroup>
            </div>
        </div>
    )
}

export default Testimonial;