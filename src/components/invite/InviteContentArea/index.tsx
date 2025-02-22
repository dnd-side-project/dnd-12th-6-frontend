'use client';

import React from 'react';

import Icon from '@/components/common/Icon';
import { InvitationDTO } from '@/lib/invitation';
import { useGetInvitationResponseQuery } from '@/lib/invitation/hooks/useGetInvitationResponseQuery';
import { formatDateWithDay, formatTimeOnly } from '@/utils/format/formatDate';

import InviteInfoBox from './InviteInfoBox';
import InviteResponseList from './InviteResponseList';

const InviteContentArea = ({
  invitationId,
  place,
  date,
  maxAttendances,
  description,
}: Partial<InvitationDTO>) => {
  const { data } = useGetInvitationResponseQuery(invitationId || 0);
  const responses = data?.data || [];

  return (
    <div id='info_area' className='min-h-dvh pt-[42px] px-[18px] flex flex-col gap-12'>
      <InviteInfoBox>
        <div className='flex items-start gap-[22px]'>
          <div className='flex items-center gap-[3px] typo-body font-bold'>
            <Icon name='marker' className='w-20 h-20 text-gray-7' />
            장소
          </div>
          <div className='flex-1'>
            <div className='flex justify-between items-center typo-body font-medium'>
              {place}
              <Icon name='arrow_down' className='w-[22px] h-[22px] text-black rotate-180' />
            </div>
            {/* <p className='text-gray-6 typo-label2'>서울특별시 강남구 도산대로100</p> */}
          </div>
        </div>
      </InviteInfoBox>
      <InviteInfoBox>
        <div className='flex items-center gap-[22px]'>
          <div className='flex items-center gap-[3px] typo-body font-bold'>
            <Icon name='calendar' className='w-20 h-20 text-gray-7' />
            일시
          </div>
          <div className='flex items-center typo-body font-medium'>
            {formatDateWithDay(date || '')}
            <span className='h-12 w-2 mx-8 bg-gray-2 rounded-round'></span>
            <div className='w-[68px] text-center'>{date ? formatTimeOnly(date) : ''}</div>
          </div>
        </div>
      </InviteInfoBox>
      <InviteInfoBox>
        <div className='flex items-center gap-[22px]'>
          <div className='flex items-center gap-[3px] typo-body font-bold'>
            <Icon name='head_count' className='w-20 h-20 text-gray-7' />
            인원
          </div>
          <div className='typo-body font-medium'>{maxAttendances}명</div>
        </div>
      </InviteInfoBox>
      <InviteInfoBox>
        <div className='flex items-center gap-[22px]'>
          <div className='flex items-center gap-[3px] typo-body font-bold'>
            <Icon name='chat' className='w-20 h-20 text-gray-7' />
            메세지
          </div>
        </div>
        <p className='mt-16 typo-label1 text-center'>{description}</p>
      </InviteInfoBox>
      <InviteInfoBox>
        <div className='pb-10 flex justify-between gap-[22px] border-b border-gray-3'>
          <div className='flex items-center gap-[3px] typo-body font-bold'>
            <Icon name='mailbox' className='w-20 h-20 text-gray-7' />
            응답 현황
          </div>
          <div className='w-[52px] h-28 flex justify-center items-center typo-caption1 font-medium bg-white rounded-round'>
            <b>{responses.length}</b>명
          </div>
        </div>
        <InviteResponseList responses={responses} />
      </InviteInfoBox>
    </div>
  );
};

export default InviteContentArea;
