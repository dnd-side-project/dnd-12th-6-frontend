'use client';

import { useState } from 'react';

import ResponseContent from './ResponseContent';
import ResponseTab from './ResponseTab';

export type TabState = 'all' | 'accept' | 'reject' | 'pending';

const InvitationResponse = () => {
  const [tabState, setTabState] = useState<TabState>('all');

  return (
    <>
      <div className='flex-1 w-full'>
        <ResponseTab tabState={tabState} setTabState={setTabState} />
        <ResponseContent />
      </div>
      <button
        className='shrink-0 w-full h-[100px] flex justify-center items-center bg-white
        typo-body font-medium text-gray-5 underline'
      >
        모임 취소하기
      </button>
      <div className='sticky bottom-0 text-nowrap'>
        <button className='w-full px-20 py-[18px] text-center bg-gray-7 typo-heading text-white font-semibold'>
          초대장 공유하기
        </button>
      </div>
    </>
  );
};

export default InvitationResponse;
