import React from 'react';

import { StrictPropsWithChildren } from '@/types/common';

const CTAButton = React.forwardRef<HTMLButtonElement, StrictPropsWithChildren>(
  ({ children }, ref) => {
    return (
      <div className='sticky bottom-0'>
        <button
          ref={ref}
          className='w-full h-[60px] flex items-center justify-center text-white typo-heading font-semibold bg-gray-7'
        >
          {children}
        </button>
      </div>
    );
  },
);

CTAButton.displayName = 'CTAButton';

export default CTAButton;
