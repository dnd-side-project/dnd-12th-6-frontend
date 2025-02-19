'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

import Icon from '@/components/common/Icon';

export interface Props {
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
  /**
   * page title
   */
  title?: string;
}

const PageHeader = ({ left, right, backButton, title }: Props) => {
  const router = useRouter();

  return (
    <header className='h-[54px] px-[22px] sticky top-0 flex justify-space items-center bg-white border-b border-gray-2 z-50'>
      {backButton && (
        <button onClick={() => router.back()}>
          <Icon name='back' className='w-24 h-24' />
        </button>
      )}
      {!backButton && left}

      {title && (
        <h1 className='absolute left-1/2 -translate-x-1/2 text-center typo-heading font-bold'>
          {title}
        </h1>
      )}
      <div className='flex-1'></div>
      {right}
    </header>
  );
};

export default PageHeader;
