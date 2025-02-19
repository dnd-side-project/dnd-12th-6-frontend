import Image from 'next/image';
import React from 'react';

interface Props {
  leftSticker?: string;
  rightSticker?: string;
  card: string;
  title: string;
}

const CardPreview = ({ leftSticker, rightSticker, card, title }: Props) => {
  return (
    <div className='h-[350px] content-center relative'>
      {leftSticker && (
        <span className='absolute top-0'>
          <Image src={leftSticker} width={90} height={90} alt='상단 스티커' />
        </span>
      )}
      <Image src={card} width={300} height={350} alt='카드' />
      <p className='absolute top-[35%] left-1/2 -translate-x-1/2 typo-title text-white '>{title}</p>
      {rightSticker && (
        <span className='absolute bottom-0 right-0'>
          <Image src={rightSticker} width={90} height={90} alt='하단 스티커' />
        </span>
      )}
    </div>
  );
};

export default CardPreview;
