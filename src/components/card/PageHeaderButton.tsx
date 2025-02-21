'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';

import { useInvitationStore } from '@/store/invitationStore';

export const PageHeaderCancelButton = () => {
  const router = useRouter();

  const { resetInvitation } = useInvitationStore();

  const handleClick = () => {
    resetInvitation();
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
  const { invitation } = useInvitationStore();
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <button
      className={clsx(
        'absolute right-[22px] w-[30px] h-[30px] flex items-center justify-center typo-body font-medium',
        invitation.title !== '' ? 'text-primary-strong' : 'text-gray-4',
      )}
      onClick={handleClick}
    >
      완료
    </button>
  );
};
