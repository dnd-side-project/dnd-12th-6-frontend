'use client';

import { useState } from 'react';

import Icon from '@/components/common/Icon';
import { invitationType } from '@/lib/invitation';

import HistoryCards from './HistoryCards';
import HistoryTab from './HistoryTab';

export default function InvitationHistory() {
  const [historyType, setHistoryType] = useState<invitationType>('CREATOR');

  return (
    <>
      <div className='px-[18px]'>
        <header className='flex items-center pl-4 pb-12 gap-x-4 typo-heading font-bold text-gray-7'>
          <Icon name='history' className='w-18 h-18' />
          초대장 히스토리
        </header>
        <HistoryTab historyType={historyType} setHistoryType={setHistoryType} />
      </div>
      <HistoryCards historyType={historyType} />
    </>
  );
}
