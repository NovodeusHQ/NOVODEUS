import React from 'react';
import TopBanner from '@/components/explore/TopBanner';
import Projects from '@/components/explore/Projects';
import CTA from '@/components/reusables/CTA';

const Explore = () => {
  return (
    <div>
        <TopBanner />
        <Projects />
        <CTA />
    </div>
  )
}

export default Explore;