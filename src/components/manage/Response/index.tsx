'use client';

import { useState } from 'react';

import { getDdayInfo } from '@/utils/format/formatDate';

import CancelModal from './CancelModal';
import DeleteModal from './DeleteModal';
import ResponseContent from './ResponseContent';
import ResponseTab from './ResponseTab';
import ShareModal from './ShareModal';

export type TabState = 'all' | 'accept' | 'reject' | 'pending';

const InvitationResponse = () => {
  const [tabState, setTabState] = useState<TabState>('all');

  const date = '2025-02-18T13:30:00';

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
        {getDdayInfo(date).isPassed ? (
          <DeleteModal>
            <div>내역 삭제하기</div>
          </DeleteModal>
        ) : (
          <CancelModal>
            <div>모임 취소하기</div>
          </CancelModal>
        )}
      </button>
      <ShareModal>
        <div className='sticky bottom-0 text-nowrap'>
          <button className='w-full px-20 py-[18px] text-center bg-gray-7 typo-heading text-white font-semibold'>
            초대장 공유하기
          </button>
        </div>
      </ShareModal>
    </>
  );
};

export default InvitationResponse;
