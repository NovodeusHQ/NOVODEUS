import React from 'react';
import styles from "../../app/page.module.scss";
import { images } from '@/exports/image';
import Link from 'next/link';
import Image from 'next/image';

const SelectedProjects = () => {

    const projects = [
        images.Project1,
        images.Project2,
        images.Project3,
        images.Project4
    ];

    return (
        <div className={`${styles.selectedProjects} container-fluid py-3 px-3 py-lg-5 px-lg-5`}>
            <h2 className='mb-3'>Selected Projects</h2>

            <div className="selected-project-container">
                {projects.map((project, idx) => {
                    const even = idx % 2 === 0;

                    return (
                        <div className={`my-3 my-md-2 selected-project d-flex ${even ? 'justify-content-md-end pe-md-2' : 'justify-content-md-start ps-md-2'}`} data-aos="zoom-out" data-aos-ease="ease-out" data-aos-duration="1200" key={idx}>
                            <Link href="#">
                                <Image src={project} alt={`project-${idx}`} className='img-fluid' loading='eager' />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SelectedProjects