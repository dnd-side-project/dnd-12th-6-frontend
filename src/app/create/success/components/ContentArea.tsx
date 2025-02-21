'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import useCopyLink from '@/components/common/CopyLinkWithAlert/useCopyLink';
import ServicePrepareModal from '@/components/common/Dialog/ServicePrepareModal';
import CTAButton from '@/components/invite/CTAButton';

const ContentArea = () => {
  const router = useRouter();
  const { copyLink } = useCopyLink();

  const handleCopyLink = () => {
    const fullDomain = window.location.origin;

    copyLink(`${fullDomain}/invite/${67}`);

    alert('링크가 복사되었습니다.');
  };

  return (
    <div className=''>
      <div className='pt-[60px] px-[18px]'>
        <div className='flex flex-col gap-[13px] items-center'>
          <h1 className='typo-title !text-[26px] font-bold text-gray-7 text-center'>
            초대장 만들기를
            <br />
            완료했어요!
          </h1>
          <p className='type-body font-medium text-gray-4 text-center'>
            초대장을 어떻게 공유할까요?
          </p>
          <Image src={'/images/create/success_card.png'} width={138} height={138} alt='' />
        </div>

        <div className='mt-[60px] flex flex-col gap-12'>
          <ServicePrepareModal>
            <button className='h-[52px] typo-body font-semibold rounded-sm bg-[#FEE500]'>
              카카오톡으로 알려주기
            </button>
          </ServicePrepareModal>
          <button
            className='h-[52px] typo-body font-semibold text-primary-strong rounded-sm bg-primary-natural'
            onClick={handleCopyLink}
          >
            링크 복사하기
          </button>
        </div>
      </div>

      <div className='fixed bottom-0 max-w-content w-full' onClick={() => router.push('/main')}>
        <CTAButton>메인으로 가기</CTAButton>
      </div>
    </div>
  );
};

export default ContentArea;
