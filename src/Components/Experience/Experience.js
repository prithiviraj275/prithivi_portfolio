import React from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import {AlternateTimelineDesigns ,LeftAlignedTimelineDesign } from '../timelineDesign/TimelineDesigns';

export default function Experience({ experiences }) {
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  return (
    <section id='Experience' className='w-full h-full overflow-auto my-10 flex flex-col font-cairo p-6'>
      <div className='name-container flex flex-col items-center'>
        <h1 className='font-bold text-5xl tracking-widest'>Experience</h1>
        <p className='my-5 text-2xl'>My work experience as a software engineer and working on different projects.</p>
      </div>  
      <div className="experienceContainer font-cairo h-full flex flex-wrap items-center">
        {isSmallScreen?<LeftAlignedTimelineDesign experiences={experiences} />:
        <AlternateTimelineDesigns experiences={experiences} />}
        
      </div>
    </section>
  );


}
