import React from 'react';
import Image from 'next/image';
import { ISuggestedProject } from '@/types/components';
import { icons } from '@/exports/image';
import styles  from "../../app/our-projects/spraay/page.module.scss";

const SuggestedProject: React.FC<ISuggestedProject> = ({ project }) => {
    return (
        <div className='col-12 col-md-6 mb-2 mb-md-0'>
            <Image src={project.img} alt={project.title} className='img-fluid'/>

            <div className="d-flex justify-content-between pt-2 pt-md-5">
                <hgroup>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                </hgroup>

                <button className={`${styles.rightPointerButton} btn btn-outline-primary rounded-pill`}>
                </button>
            </div>
        </div>
    )
}

export default SuggestedProject