import { IHeadedList } from '@/types/components';
import React from 'react';
import Image from 'next/image';

const HeadedList: React.FC<IHeadedList> = ({ listItem }) => {
    return (
        <div className="row mx-0 px-0" data-aos="flip-down">
            <div className="col-1 px-0">
                <Image src={listItem.bulletImage} alt="bullet point" className='' />
            </div>
            <div className='col-11 ps-5 ps-lg-3'>
                <h4 className=''>
                    { listItem.header }
                </h4>
                <p className=''>
                    { listItem.paragraph }
                </p>
            </div>
        </div>
    )
}

export default HeadedList;