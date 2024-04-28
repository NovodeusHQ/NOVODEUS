import React from 'react';
import TopBanner from '@/components/ourProjects/TopBanner';
import Projects from '@/components/ourProjects/Projects';
import ReviewSlider from '@/components/reusables/ReviewSlider';
import CTA from '@/components/reusables/CTA';

const Explore = () => {
  return (
    <div>
        <TopBanner />
        <Projects />
        <ReviewSlider />
        <CTA />
    </div>
  )
}

export default Explore;