'use client';

import { useState } from 'react';

import CreateInvitationButton from './CreateInvitationButton';
import UpcomingHeader from './UpcomingHeader';

// TODO: 다가오는 모임 있는 케이스 UI 구현
export default function UpcomingInvitation() {
  const [isEmpty] = useState<boolean>(true);

  return (
    <div className='px-[18px] flex flex-col gap-y-24'>
      <UpcomingHeader isEmpty={isEmpty} />
      {isEmpty ? <CreateInvitationButton /> : <></>}
    </div>
  );
}
