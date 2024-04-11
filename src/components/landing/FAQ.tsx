'use client'

import React from "react";
import styles from "../../app/page.module.css";
import ImportBootstrap from "../reusables/ImportBoostrap";

const FAQ = () => {
    const faqs = [
        {
            question: "What's the recommended daily dosage for this supplement?",
            answer: " The recommended dosage can vary based on age and individual health needs. Please consult your healthcare provider for personalized advice."
        },
        {
            question: "What's the recommended daily dosage for this supplement?",
            answer: " The recommended dosage can vary based on age and individual health needs. Please consult your healthcare provider for personalized advice."
        },
        {
            question: "What's the recommended daily dosage for this supplement?",
            answer: " The recommended dosage can vary based on age and individual health needs. Please consult your healthcare provider for personalized advice."
        },
        {
            question: "What's the recommended daily dosage for this supplement?",
            answer: " The recommended dosage can vary based on age and individual health needs. Please consult your healthcare provider for personalized advice."
        },
        {
            question: "What's the recommended daily dosage for this supplement?",
            answer: " The recommended dosage can vary based on age and individual health needs. Please consult your healthcare provider for personalized advice."
        }
    ]

    return (
        <div className={styles.faq}>
            <ImportBootstrap />
            <h2>Frequently Asked Questions</h2>

            <div className="accordion accordion-flush" id="accordionFlushExample">
                {faqs.map((faq, idx) => {
                    return (
                        <div className="accordion-item" key={idx}>
                            <h2 className="accordion-header" id={`flush-heading-${idx}`}>
                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${idx}`} aria-expanded="false" aria-controls={`flush-collapse-${idx}`}>
                                    What&apos;s the recommended daily dosage for this supplement?
                                </button>
                            </h2>
                            <div id={`flush-collapse-${idx}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading-${idx}`} data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    The recommended dosage can vary based on age and individual health needs. Please consult your healthcare provider for personalized advice.
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default FAQ