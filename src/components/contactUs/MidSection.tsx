import React from 'react';
import styles from '../../app/contact-us/page.module.css';
import ContactForm from './ContactForm';

const MidSection = () => {

    return (
        <div className={styles.midSection}>
            <p>
                We&apos;re here to understand your project&apos;s unique needs and create tailored solutions that bring your vision to reality. Please fill out the form below, and let&apos;s embark on this transformative journey together.
            </p>

            <div className={styles.contactForm}>
                <ContactForm />
            </div>
        </div>
    )
}

export default MidSection