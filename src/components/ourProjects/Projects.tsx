import React from 'react';
import styles from '../../app/our-projects/page.module.scss';
import { IProject } from '@/types/dataObjs';
import Image from 'next/image';
import { images } from '@/exports/image';

const Projects = () => {
    const project1 = {
        img: images.PlaceholderProject,
        title: "Project 1",
        description: "Spraay App is a product that seamlessly blends the traditional cultural practice of money spraying with modern fintech capabilities, creating a digital platform that enhances event experiences, promotes inclusivity, and empowers users with secure financial interactions."
    };

    const projects: Array<IProject> = [...Array(6)].fill(project1);

    return (
        <div className={`${styles.projects} px-5 py-5`}>
            <hgroup className='row mb-2'>
                <h3 className='col-12 col-md-4 mb-3 mb-md-0'>
                    <span className='pb-2 px-4'>Product Design</span>
                </h3>
                <h3 className='col-12 col-md-4 mb-3 mb-md-0'>
                    <span className='pb-2 px-4'>Branding</span>
                </h3>
                <h3 className='col-12 col-md-4 mb-3 mb-md-0'>
                    <span className='pb-2 px-4'>Development</span>
                </h3>
            </hgroup>

            <div className="row">
                {
                    projects.map((project, idx) => {
                        return (
                            <div key={idx} className='col-12 col-md-4 px-2 py-2 d-flex flex-column align-items-center align-items-md-start'>
                                <Image src={project.img} alt={project.title} className='img-fluid' />
                                <hgroup className='mt-3'>
                                    <h5>{project.title}</h5>
                                    <p className='my-0'>{project.description}</p>
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