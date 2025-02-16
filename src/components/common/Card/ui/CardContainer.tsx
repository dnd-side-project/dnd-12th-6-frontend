'use client';

import Image from 'next/image';
import { PropsWithChildren } from 'react';

import cardImage from '/public/images/module/01-Card-Module.png';

const CardContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-[180px] h-[226px] relative shrink-0 drop-shadow-module'>
      <Image
        src={cardImage}
        alt='card'
        width={180}
        height={180}
        className='absolute bottom-8 translate-y-2'
      />
      {children}
    </div>
  );
};

export default CardContainer;
