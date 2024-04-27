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
        <div className={`${styles.selectedProjects} container-fluid py-5 px-5`}>
            <h2 className='mb-3'>Selected Projects</h2>

            <div className="row d-flex justify-content-between">
                {projects.map((project, idx) => {
                    return (
                        <div className="col-6 my-2 px-2" key={idx}>
                            <Link href="#">
                                <Image src={project} alt={`project-${idx}`} className='img-fluid' loading='eager'/>
                            </Link>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default SelectedProjects