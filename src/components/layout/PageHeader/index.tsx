'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ReactNode } from 'react';

import Icon from '@/components/common/Icon';

interface Props {
  /**
   * left 영역 컴포넌트
   */
  left?: ReactNode;
  /**
   * right 영역 컴포넌트
   */
  right?: ReactNode;
  /**
   * back button
   */
  backButton?: boolean;
}

const PageHeader = ({ left, right, backButton }: Props) => {
  const pathName = usePathname();
  const router = useRouter();

  const routerTitle: Record<string, string> = {
    '/create': '초대장 만들기',
  };

  return (
    <header className='h-[54px] px-[22px] flex justify-center items-center bg-white border-b border-gray-2'>
      {backButton && (
        <button onClick={() => router.back()}>
          <Icon name='back' className='w-24 h-24' />
        </button>
      )}
      {!backButton && left}
      <h1 className='flex-1 text-center typo-heading font-bold'>{routerTitle[pathName]}</h1>
      {right}
    </header>
  );
};

export default PageHeader;
