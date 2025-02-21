import React from 'react';

import { StrictPropsWithChildren } from '@/types/common';

const CTAButton = ({ children }: StrictPropsWithChildren) => {
  return (
    <div className='sticky bottom-0'>
      <button className='w-full h-[60px] flex items-center justify-center text-white typo-heading font-semibold bg-gray-7'>
        {children}
      </button>
    </div>
  );
};

export default CTAButton;
