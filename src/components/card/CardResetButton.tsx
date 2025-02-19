'use client';

import clsx from 'clsx';

import { useInvitationStore } from '@/store/invitationStore';

import Icon from '../common/Icon';

const CardResetButton = () => {
  const { invitation, isModified, resetInvitation } = useInvitationStore();
  const isActive = isModified && invitation.title !== '';

  return (
    <div className='absolute top-16 right-16 flex flex-col gap-y-[5px] z-[40]'>
      <button
        className='flex items-center justify-center w-[42px] h-[42px] pl-4 bg-white rounded-full shadow-[0_0_4px_0_rgba(0,0,0,0.15)]'
        onClick={isActive ? resetInvitation : undefined}
        disabled={!isActive}
      >
        <Icon
          name={isActive ? 'redo_active' : 'redo'}
          className={clsx('w-[22px] h-[22px]', isActive ? 'text-primary-strong' : 'text-gray-3')}
        />
      </button>
      <div
        className={clsx(
          'w-[42px] typo-caption1 font-medium text-center',
          isActive ? 'text-white' : 'text-gray-3',
        )}
      >
        초기화
      </div>
    </div>
  );
};

export default CardResetButton;
