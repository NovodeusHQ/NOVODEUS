import React from 'react';
import { IReviewCard } from '@/types/components';
import Image from 'next/image';
import styles from "../../app/page.module.scss";

const ReviewCard: React.FC<IReviewCard> = ({ review, className }) => {
  return (
    <section className={`${styles.reviewCard} ${className}`} data-swiper-slide-index="0">
        <Image src={review.companyLogo} alt="company logo" />

        <p className="my-3 fw-bold">{review.quote}</p>

        <hgroup>
            <h6>{review.name}</h6>
            <p>{review.role}</p>
        </hgroup>

    </section>
  )
}

export default ReviewCard