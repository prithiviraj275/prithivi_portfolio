import React from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import {AlternateTimelineDesigns ,LeftAlignedTimelineDesign } from '../timelineDesign/EducationTimelineDesign';

export default function Education({ education }) {
  const isSmallScreen = useMediaQuery('(max-width:768px)');

      
  return (
    <section id='Education' className='w-full h-full my-10 flex flex-col font-cairo p-6'>
      <div className='name-container flex flex-col items-center'>
        <h1 className='font-bold text-5xl tracking-widest'>Education</h1>
        <p className='my-5 text-2xl'>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
      </div>  
      <div className="EducationContainer font-cairo h-full flex flex-wrap items-center">

      {isSmallScreen?<LeftAlignedTimelineDesign education={education} />:
      <AlternateTimelineDesigns education={education} />}
      </div>
    </section>
  );


}
