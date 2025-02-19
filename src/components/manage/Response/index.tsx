'use client';

import { useState } from 'react';

import ResponseTab from './ResponseTab';

export type TabState = 'all' | 'accept' | 'reject' | 'pending';
const InvitationResponse = () => {
  const [tabState, setTabState] = useState<TabState>('all');

  return (
    <>
      <div className='border border-blue-500 w-full min-h-[420px]'>
        <ResponseTab tabState={tabState} setTabState={setTabState} />
      </div>
      <button
        className='w-full h-[100px] flex justify-center items-center bg-white
        typo-body font-medium text-gray-5 underline'
      >
        모임 취소하기
      </button>
      <div className='sticky bottom-0'>
        <button className='w-full px-20 py-[18px] text-center bg-gray-7 typo-heading text-white font-semibold'>
          초대장 공유하기
        </button>
      </div>
    </>
  );
};

export default InvitationResponse;
