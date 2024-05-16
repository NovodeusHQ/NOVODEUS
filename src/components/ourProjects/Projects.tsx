'use client'

import React, { useState } from 'react';
import styles from '../../app/our-projects/page.module.scss';
import { IProject, IProjectCategory } from '@/types/dataObjs';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/exports/image';

const Projects = () => {
    const project1 = {
        img: images.PlaceholderProject,
        title: "Project 1",
        description: "Spraay App is a product that seamlessly blends the traditional cultural practice of money spraying with modern fintech capabilities, creating a digital platform that enhances event experiences, promotes inclusivity, and empowers users with secure financial interactions."
    };

    const projects: Array<IProject> = [...Array(6)].fill(project1);

    const projectCategories: Array<IProjectCategory> = [
        {
            id: 0,
            title: "Product Design",
            projects: [...projects]
        },
        {
            id: 1,
            title: "Branding",
            projects: [...projects]
        },
        {
            id: 2,
            title: "Development",
            projects: [...projects]
        },
    ];

    const [activeCategory, setActiveCategory] = useState(projectCategories[0]);

    const selectCategory = (idx: number) => {
        const category: IProjectCategory = projectCategories.find(project => project.id === idx) ?? projectCategories[0];
        setActiveCategory(category);
    };

    return (
        <div className={`${styles.projects} px-0 px-lg-5 py-5`}>
            <hgroup className='row mb-2 mx-0'>
                {projectCategories.map((category, idx) => {
                    return (
                        <h3 className={`${idx === activeCategory.id ? styles.active : ''} col-4 py-1 py-lg-3 px-0 d-flex align-items-center justify-content-center`} key={idx}
                            onClick={() => selectCategory(idx)}
                        >
                            {category.title}
                        </h3>
                    )
                })}
            </hgroup>

            {/* <div className="row" data-aos="slide-right" data-aos-duration="600"> */}
            <div className="row">
                {
                    activeCategory.projects.map((project, idx) => {
                        const key = activeCategory.id.toString() + idx.toString();

                        return (
                            <div key={key} className='fade-in col-12 col-md-4 px-4 py-4 d-flex flex-column align-items-center'>
                                <Link href="/our-projects/spraay">
                                    <Image src={project.img} alt={project.title} className='img-fluid zoom-on-hover' loading="eager" />
                                </Link>

                                <hgroup className={`${styles.projectDetails} mt-3`}>
                                    <h4 className='text-black'>{project.title}</h4>
                                    <p className='my-0 text-muted'>{project.description}</p>
                                </hgroup>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Projects