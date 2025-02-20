'use client';

import { useRouter } from 'next/navigation';

import Icon from '../common/Icon';

export const PageHeaderCloseButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <button onClick={handleClick}>
      <Icon name='close' className='w-24 h-24' />
    </button>
  );
};
