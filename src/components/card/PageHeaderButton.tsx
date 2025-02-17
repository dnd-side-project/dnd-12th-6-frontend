'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const PageHeaderCancelButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <button
      className='w-[30px] h-[30px] flex items-center justify-center typo-body font-medium text-gray-6'
      onClick={handleClick}
    >
      취소
    </button>
  );
};

export const PageHeaderCompleteButton = () => {
  const [isComplete] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <button
      className={clsx(
        'absolute right-[22px] w-[30px] h-[30px] flex items-center justify-center typo-body font-medium',
        isComplete ? 'text-primary-strong' : 'text-gray-4',
      )}
      onClick={handleClick}
    >
      완료
    </button>
  );
};
