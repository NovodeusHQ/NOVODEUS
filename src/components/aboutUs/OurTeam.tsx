import React from 'react';
import styles from '../../app/about-us/page.module.scss';
import { ITeamMember } from '@/types/dataObjs';
import { images } from '@/exports/image';
import Image from 'next/image';

const OurTeam = () => {

    const teamMembers: Array<ITeamMember> = [
        {
            name: "Anna Smith",
            title: "Designer",
            img: images.TeamMember1
        },
        {
            name: "Oluwapelumi Olalekan",
            title: "Web Developer",
            img: images.Pelumi
        },
        {
            name: "Anna Smith",
            title: "Designer",
            img: images.TeamMember3
        }
    ];

  return (
    <div className={styles.ourTeam}>
        <h3 className='my-1 my-lg-2'>Our Team</h3>
        <div className="row lg-d-flex flex-row justify-content-center">
            {
                teamMembers.map((member, idx) => {
                    return (
                        <div key={idx} className={ `${styles.teamMember} col-12 col-md-3 px-0 mx-2 my-2 my-lg-0 d-flex flex-column align-items-center`} data-aos="flip-right" data-aos-duration="500">
                            <Image src={member.img} alt={member.name} className='img-fluid'/>
                            <hgroup className='text-center'>
                                <h5>{member.name}</h5>
                                <p className='my-0'>{member.title}</p>
                            </hgroup>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default OurTeam