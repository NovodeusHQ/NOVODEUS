'use client'

import React from 'react';
import { IServiceButton } from '@/types/components';
import styles from "../../app/contact-us/page.module.scss";

const ServiceButton: React.FC<IServiceButton> = ({
  text,
  className,
  service,
  setService,
  active
}) => {
  return (
    <button type="button"
      className={`${styles.serviceButton} ${className} ${active ? styles.serviceButtonActive : ''} btn rounded-pill`}
      onClick={() => setService(service)}
    >
      {text}
    </button>
  )
}

export default ServiceButton