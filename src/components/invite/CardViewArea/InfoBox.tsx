import Image from 'next/image';
import React from 'react';

import { InvitationDTO } from '@/lib/invitation';

const InfoBox = ({ hostProfileImageUrl, organizerName }: Partial<InvitationDTO>) => {
  return (
    <div className='flex flex-col gap-12 items-center'>
      <div className='w-40 h-40 flex items-center justify-center border-[2.4px] border-white rounded-md overflow-hidden'>
        {/* <img
          className='min-w-40 min-h-40'
          src='https://avatar.iran.liara.run/public?w=48&q=75'
          alt='프로필'
        /> */}
        <Image
          src={hostProfileImageUrl ? hostProfileImageUrl : '/images/user/profile_default_image.svg'}
          alt='profile'
          width={36}
          height={36}
        />
      </div>
      <p className='text-white typo-heading font-medium text-center'>
        <b className='font-bold'>{organizerName}</b>님이
        <br />
        당신을 초대합니다!
      </p>
    </div>
  );
};

export default InfoBox;
