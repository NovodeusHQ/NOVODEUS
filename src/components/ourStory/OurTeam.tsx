import React from 'react';
import styles from '../../app/our-story/page.module.scss';
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
            name: "Anna Smith",
            title: "Designer",
            img: images.TeamMember2
        },
        {
            name: "Anna Smith",
            title: "Designer",
            img: images.TeamMember3
        }
    ];

  return (
    <div className={styles.ourTeam}>
        <h3 className='my-0'>Our Team</h3>
        <div className="d-flex flex-row justify-content-center">
            {
                teamMembers.map((member, idx) => {
                    return (
                        <div key={idx} className={ `${styles.teamMember} mx-2`}>
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