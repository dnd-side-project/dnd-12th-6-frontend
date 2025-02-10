'use client';

import Image from 'next/image';
import { PropsWithChildren } from 'react';

const CardContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-[180px] h-[208px] relative shrink-0'>
      <Image
        src={'/images/module/01-Card-Module.png'}
        alt='card'
        width={180}
        height={180}
        className='absolute bottom-0'
      />
      {children}
    </div>
  );
};

export default CardContainer;
