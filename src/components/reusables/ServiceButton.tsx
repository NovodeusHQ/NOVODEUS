'use client'

import React from 'react';
import { IButton } from '@/types/components';
import styles from "../../app/contact-us/page.module.scss";

const ServiceButton: React.FC<IButton> = ({
    text,
    className
}) => {
  return (
    <button type="button" className={`${styles.serviceButton} ${className} btn rounded-pill`}
    >
        {text}
    </button>
  )
}

export default ServiceButton