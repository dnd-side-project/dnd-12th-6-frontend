'use client';

import Link from 'next/link';

import Icon, { IconTypes } from '@/components/common/Icon';
import { useBottomNavStore, BottomNavList, BOTTOM_NAV_URL } from '@/store/bottomNavStore';

export interface BottomNavItemProps {
  icon: IconTypes;
  label: string;
  tab: BottomNavList;
}

//TODO: Icon 그래픽 추가 및 스타일 적용
const BottomNavItem = ({ icon, label, tab }: BottomNavItemProps) => {
  const { setActiveTab } = useBottomNavStore();
  //const isActive = activeTab === tab;

  return (
    <Link
      href={BOTTOM_NAV_URL[tab]}
      className='w-72 h-40 flex flex-col items-center'
      onClick={() => setActiveTab(tab)}
    >
      <Icon name={icon} className='w-24 h-24' />
      <div className='h-15 text-caption2 text-gray-7 font-regular'>{label}</div>
    </Link>
  );
};

export default BottomNavItem;
