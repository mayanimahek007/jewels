import React from 'react';

export default function Heading({ title }) {
  return (
    <div className='mb-2 text-center sm:mb-3 md:mb-4 lg:mb-5'>
      <h2 className='mb-1 text-[22px] font-light text-[#2B4E4E] decoration-[1.5px] sm:mb-2 sm:text-2xl md:text-3xl md:decoration-2 lg:text-4xl'>
        {title}
      </h2>
    </div>
  );
}
