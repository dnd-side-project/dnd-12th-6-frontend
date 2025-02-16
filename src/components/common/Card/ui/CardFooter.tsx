'use client';

import formatDate from '@/utils/format/formatDate';

import { ICard } from '..';

const CardFooter = ({ date }: Pick<ICard, 'date'>) => {
  return (
    <div className='absolute bottom-[22px] w-[180px] h-[18px] flex justify-center items-center'>
      <span className='typo-label2 font-semibold text-gray-7'>일시</span>
      <span className='mx-[3px] typo-label2 text-gray-3'>|</span>
      <span className='typo-label2 font-regular text-gray-6'>{formatDate(date)}</span>
    </div>
  );
};

export default CardFooter;
