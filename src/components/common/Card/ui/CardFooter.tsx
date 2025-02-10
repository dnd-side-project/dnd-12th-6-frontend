'use client';

import formatDate from '@/utils/format/formatDate';

import { ICard } from '..';

const CardFooter = ({ date }: Pick<ICard, 'date'>) => {
  return (
    <div className='absolute bottom-16 w-[180px] h-[18px] flex justify-center items-center'>
      <span className='text-caption1 font-semibold text-gray-7'>일시</span>
      <span className='mx-[3px] text-label2 text-gray-3'>|</span>
      <span className='text-caption1 text-gray-6'>{formatDate(date)}</span>
    </div>
  );
};

export default CardFooter;
