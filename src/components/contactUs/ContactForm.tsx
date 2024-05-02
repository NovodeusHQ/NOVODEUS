'use client'

import React from 'react';
import { useFormStatus } from 'react-dom';
import styles from '../../app/contact-us/page.module.scss';
import ServiceButton from '../reusables/ServiceButton';
import Image from 'next/image';
import { images } from '@/exports/image';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  // useEffect(() => {
  //   console.log({ pending });
  // }, [pending]);

  return (
    <button className={`${styles.submitBtn} btn rounded-pill`}
    >
      Submit
    </button>
  )
}


const ContactForm = () => {

  const services: Array<string> = ["Mobile App Design", "Website Design", "Branding", "App Development", "Website Development", "ALL"];

  const budgets: Array<string> = ["Less than NGN 1m", "NGN 1m-4m", "NGN 4m-10m", "More than NGN 10m"]

  return (
    <form className={`${styles.contactForm} row`}>
      <div className={`${styles.leftColumn} col-12 col-md-6`}>
        <h3 className='mx-1 mb-4 mb-md-5'>Let&apos;s talk about your idea</h3>

        <div className={styles.selectServices}>
          <h3 className='mx-1'>Select Service <span>(You can choose more than one)</span></h3>
          <div className='pb-4'>
            {services.map((service, idx) => {
              return <ServiceButton text={service} key={idx}
                className="mx-1 my-1" />
            })}
          </div>

          <h3 className='mt-1 mx-1'>Project Budget <span>(in NGN)</span></h3>
          <div className=''>
            {budgets.map((service, idx) => {
              return <ServiceButton text={service} key={idx}
                // className={`${!(idx === 0) ? 'ms-1' : ''} ${!(idx === services.length - 1) ? 'me-1' : ''} my-1`}
                className='mx-1 my-1'
              />
            })}
          </div>
        </div>

      </div>

      <div className="col-12 col-md-6 mt-5 mt-md-0 text-muted">
        <p>Our team comprises seasoned product managers, creative designers, and adept developers, crafting digital products with expertise and creativity.</p>

        <h3>Select Service <span>(You can choose more than one)</span></h3>

        <aside className=''>
          <div className='my-2'>
            <input
              id='name'
              name='name'
              type='text'
              placeholder='Name*'
              className=' w-5/12 pb-3'
            />
          </div>
          <div className="my-2">
            <input
              id='email'
              name='email'
              type='text'
              placeholder='Email*'
              className=' w-5/12 pb-3'
            />
          </div>
          <div className='my-2'>
            <input
              id='Telegram/WhatsApp*'
              name='telegram'
              type='text'
              placeholder='Telegram/WhatsApp*'
              className='w-full pb-3 '
            />
          </div>
          <div className='my-2'>
            <input
              id='companyURL'
              name='companyURL'
              type='text'
              placeholder='Company URL'
              className='w-full pb-3 '
            />
          </div>
          <div className='my-2'>
            <textarea
              id='message'
              name='message'
              placeholder='Message'
              className='w-full pb-3 '
              rows={4}
            />
          </div>

          <div className='mt-4 mb-5 my-md-5'>
            <SubmitButton />
          </div>
        </aside>
      </div>

      <div className={`${styles.trustedBy}`}>
        <p>Trusted By</p>
        <Image src={images.FibreOneDim} alt="Fibre One" className='me-5' />
        <Image src={images.SpraayDim} alt="Spraay" />
      </div>
    </ form>
  )
}

export default ContactForm