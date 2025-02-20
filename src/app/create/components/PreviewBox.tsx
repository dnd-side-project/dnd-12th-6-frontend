'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const PreviewBox = () => {
  const router = useRouter();

  return (
    <div
      className='cursor-pointer w-full relative h-[360px] bg-preview bg-cover'
      onClick={() => router.push('/create/card')}
    >
      <div className='w-[190px] absolute top-80 left-1/2 -translate-x-1/2 flex flex-col items-center gap-24'>
        <Image src='/images/create/letter_image.png' width={106} height={130} alt='' />
        <p className='typo-label1 text-primary-strong'>
          여기를 눌러 <b className='font-bold text-nowrap'>우리만의 초대장 꾸미기</b>
        </p>
      </div>
      <div className='w-[157px] h-[44px] absolute bottom-[-22px] left-1/2 -translate-x-1/2 flex items-center justify-center border border-primary-normal rounded-xl bg-primary-natural'>
        <p className='typo-body font-bold text-primary-strong'>꾸미기</p>
      </div>
    </div>
  );
};

export default PreviewBox;
