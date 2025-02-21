'use client';

import { useRouter } from 'next/navigation';

import Icon from '@/components/common/Icon';

export const PageHeaderCloseButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.replace('/main');
  };

  return (
    <button onClick={handleClick}>
      <Icon name='close' className='w-24 h-24' />
    </button>
  );
};
