import React from 'react';

import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';

const page = () => {
  return (
    <PageContainer>
      <PageHeader backButton />
      <div className='cursor-pointer w-full relative h-[360px] bg-preview bg-cover'>
        <div className='w-[190px] absolute top-80 left-1/2 -translate-x-1/2 flex flex-col items-center gap-24'>
          <img className='w-[106px]' src='/images/create/letter_image.png' />
          <p className='typo-label1 text-primary-strong'>
            여기를 눌러 <b className='font-bold'>우리만의 초대장 꾸미기</b>
          </p>
        </div>
        <div className='w-[157px] h-[44px] absolute bottom-[-22px] left-1/2 -translate-x-1/2 flex items-center justify-center border border-primary-normal rounded-xl bg-primary-natural'>
          <p className='typo-body font-bold text-primary-strong'>꾸미기</p>
        </div>
      </div>

      <div></div>
    </PageContainer>
  );
};

export default page;
