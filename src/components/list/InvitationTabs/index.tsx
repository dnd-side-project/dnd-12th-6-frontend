'use client';

import Tab from '@/components/common/Tab';
import { useInvitationTabStore } from '@/store/invitationListStore';

export default function InvitationTabs() {
  const { selectedTab, setSelectedTab, invitationCounts } = useInvitationTabStore();

  return (
    <div className='sticky w-full top-[54px] px-[18px] pb-16 bg-white z-20'>
      <div className='flex flex-col pt-[30px] px-4 py-16 gap-y-4'>
        <header className='font-nexon typo-headline text-gray-7'>초대장 목록</header>
        <div className='typo-label1 font-medium text-gray-5'>
          만들고 받았던 모든 초대장을 볼 수 있어요.
        </div>
      </div>
      <div className='flex gap-x-[7px]'>
        <button onClick={() => setSelectedTab('all')}>
          <Tab count={invitationCounts.all} active={selectedTab === 'all'}>
            <Tab.Text>전체</Tab.Text>
            <Tab.Count />
          </Tab>
        </button>
        <button onClick={() => setSelectedTab('sent')}>
          <Tab count={invitationCounts.sent} active={selectedTab === 'sent'}>
            <Tab.Text>보낸 초대장</Tab.Text>
            <Tab.Count />
          </Tab>
        </button>
        <button onClick={() => setSelectedTab('received')}>
          <Tab count={invitationCounts.received} active={selectedTab === 'received'}>
            <Tab.Text>받은 초대장</Tab.Text>
            <Tab.Count />
          </Tab>
        </button>
      </div>
    </div>
  );
}
