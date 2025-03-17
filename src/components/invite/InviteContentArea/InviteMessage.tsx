import React from 'react';

import { InvitationUserResponse } from '@/lib/invitation';
import { formatDateNoTime } from '@/utils/format/formatDate';

interface Props {
  response: InvitationUserResponse;
}
const InviteMessage = ({ response }: Props) => {
  const state =
    response.state === 'ATTENDING'
      ? '참석해요'
      : response.state === 'NOT_ATTENDING'
        ? '불참해요'
        : '고민중이에요';

  return (
    <div>
      <div className='flex items-center gap-12'>
        <div className='w-40 h-40 flex items-center justify-center border-[1.6px] border-primary-normal rounded-full bg-primary-natural'>
          <span className='text-primary-strong typo-heading font-bold'>피</span>
        </div>
        <div className='flex-1 flex flex-col gap-6'>
          <p className='text-gray-6 typo-caption1 font-medium'>
            {formatDateNoTime(response.writeDate)}
          </p>
          <div className='flex justify-between'>
            <p className='text-gray-6 typo-body font-medium'>
              <strong className='text-black font-semibold'>{response.name}님</strong>이 {state}.
            </p>
            <button
              className='text-gray-6 typo-caption1 font-semi underline'
              onClick={() => alert('준비중인 서비스입니다.😁')}
            >
              수정
            </button>
          </div>
        </div>
      </div>
      {/* 응답 메시지 */}
      <div className='mt-[17px] w-full px-[14px] py-[17.5px] flex items-center justify-between rounded-md bg-white'>
        <p>{response.message}</p>
        <button
          className='text-gray-4 typo-caption1 underline'
          onClick={() => alert('준비중인 서비스입니다.😁')}
        >
          더보기
        </button>
      </div>
    </div>
  );
};

export default InviteMessage;
