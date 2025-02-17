'use client';

import clsx from 'clsx';

import { InvitationDTO } from '@/lib/invitation';

const CardBody = ({ invitationType, title }: Pick<InvitationDTO, 'invitationType' | 'title'>) => {
  return (
    <div
      className={clsx(
        'absolute left-1/2 -translate-x-1/2 w-[100px] h-[60px] flex items-center justify-center',
        'text-base font-semibold leading-tight tracking-[-0.32px] text-white drop-shadow-moduleText text-center',
        invitationType === 'INVITED' ? 'top-[90px]' : 'top-[78px]',
      )}
    >
      {title}
    </div>
  );
};

export default CardBody;
