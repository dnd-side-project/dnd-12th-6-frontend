'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

import CardDisplay from '@/components/card/CardDisplay';
import { IInvitation } from '@/lib/invitation/types';
import { useInvitationStore } from '@/store/invitationStore';

const PreviewBox = () => {
  const pathName = usePathname();

  const { invitation } = useInvitationStore();

  return (
    <>
      {!pathName.includes('create/card') && invitation.title ? (
        // 카드가 있는 경우
        <PreviewCard {...invitation} />
      ) : (
        <EmptyCard />
      )}
    </>
  );
};

export default PreviewBox;

const PreviewCard = (invitation: IInvitation) => {
  const router = useRouter();

  return (
    <div
      className='cursor-pointer w-full relative h-[360px]'
      style={{
        backgroundImage: invitation.background
          ? `url(/images/background/background_${invitation.background}.png)`
          : `url(${invitation.backgroundImageData})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={() => router.push('/create/card')}
    >
      <div className='absolute left-1/2 -translate-x-1/2'>
        <CardDisplay {...invitation} />
      </div>
    </div>
  );
};

// 카드가 없는 경우
const EmptyCard = () => {
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
