import React from 'react';
import styles from "../../app/our-projects/spraay/page.module.scss";
import { icons } from '@/exports/image';
import ReviewCard from '../reusables/ReviewCard';
import Image from 'next/image';
import Link from 'next/link';
import { ISuggestedProjectDetails } from '@/types/dataObjs';
import { images } from '@/exports/image';
import SuggestedProject from './SuggestedProject';

const ThirdSection = () => {

    const review = {
        id: 1,
        companyLogo: icons.instacart,
        quote: "“We were able to get a published, working version of the entire website live in less than two weeks. And we didn’t have to compromise on our original designs.”",
        name: "Karen Yue",
        role: "Director of Digital Marketing Technology"
    };

    const projects: Array<ISuggestedProjectDetails> = [
        {
            title: "Project 1",
            category: "UI/UX, Branding",
            img: images.ProjectSuggestionThumbnail
        },
        {
            title: "Project 1",
            category: "UI/UX, Branding",
            img: images.ProjectSuggestionThumbnail
        }
    ]

    return (
        <section className={styles.thirdSection}>
            <ReviewCard review={review} className='with-shadow' />

            <article className='mt-3 mt-md-6'>
                <hgroup className='d-flex flex-column flex-md-row justify-content-between'>
                    <h2>Have you seen these?</h2>
                    <Link className="d-flex text-primary align-items-center no-link-underline mb-4 mb-md-0" href="#">
                        View All Works &nbsp; <Image src={icons.pointerRight} alt='pointer right' />
                    </Link>
                </hgroup>

                <div className="row">
                    {projects.map((project, idx) => {
                        return (
                            <SuggestedProject project={project} key={idx} />
                        )
                    })}
                </div>
            </article>
        </section>
    )
}

export default ThirdSection