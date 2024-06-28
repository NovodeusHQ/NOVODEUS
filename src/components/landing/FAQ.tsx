'use client'

import React from "react";
import styles from "../../app/page.module.scss";
import ImportBootstrap from "../reusables/ImportBoostrap";

const FAQ = () => {
    const faqs = [
        {
            question: "How does Novodeus differ from other agencies?",
            answer: "Novodeus stands out through a fusion of innovation, client-centricity, and a multi-disciplinary approach. Unlike traditional agencies, we prioritize collaborative partnerships, blending expertise in product design, development, and branding. Our relentless pursuit of innovation ensures tailored solutions that transcend expectations, guiding clients towards digital excellence and success."
        },
        {
            question: "How do you work with clients and what are your processes as an agency?",
            answer: "Our client engagement begins with an in-depth understanding of their goals and challenges. At Novodeus, we follow a meticulous process, starting from comprehensive research and ideation, progressing to prototyping, iterative design, development, and rigorous testing. We emphasize transparent communication, regular feedback loops, and a collaborative approach to ensure clients are integral to every stage of the project."
        },
        {
            question: "Do you work with startups or only with B2B/enterprise companies?",
            answer: "Novodeus believes in nurturing innovation across all scales. We collaborate with startups, enterprises, and B2B companies alike. Our adaptive strategies cater to the unique needs of each client, regardless of their size or industry, ensuring innovative solutions that align with their objectives."
        },
        {
            question: "Does Novodeus help with product redesign?",
            answer: "Absolutely. Novodeus specializes in holistic solutions, including product redesign. Whether it's refining existing products for enhanced user experiences or reimagining brand identities, our team leverages expertise in design, development, and branding to elevate products to new heights."
        },
        {
            question: "How much does it cost to hire your Novodeus?",
            answer: "The cost of engagement varies based on the project scope, complexity, and specific client requirements. At Novodeus, we offer tailored solutions, and our pricing is based on a transparent evaluation of project intricacies. Contact us to discuss your project specifics and receive a detailed proposal aligned with your budget."
        },
        {
            question: "How do you handle working in different time zones?",
            answer: "We're adept at working across various time zones. Our team embraces flexibility, ensuring seamless communication and project management irrespective of geographical differences. We leverage digital collaboration tools and establish clear communication protocols to ensure all stakeholders stay connected and informed."
        },
        {
            question: "How quickly can you start my project?",
            answer: "At Novodeus, we prioritize promptness without compromising quality. Our project initiation timeline depends on project complexity, resource availability, and client readiness. We strive to kick-start projects promptly after thorough initial discussions, aiming for efficient yet effective project commencement. Contact us to discuss your project timeline and our current availability."
        },
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
                                    {faq.question}
                                </button>
                            </h2>
                            <div id={`flush-collapse-${idx}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading-${idx}`} data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                   {faq.answer}
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