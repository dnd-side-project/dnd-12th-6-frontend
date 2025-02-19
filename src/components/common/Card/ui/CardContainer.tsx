'use client';

import Image from 'next/image';

import { ICard } from '..';

interface CardContainerProps {
  theme: ICard['theme'];
  children: React.ReactNode;
}
const CardContainer = ({ theme, children }: CardContainerProps) => {
  return (
    <div className='w-[180px] h-[226px] relative shrink-0 drop-shadow-module'>
      <Image
        src={`/images/card/envelope_${theme}_module.png`}
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
