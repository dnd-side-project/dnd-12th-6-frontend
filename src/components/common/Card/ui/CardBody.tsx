'use client';

import clsx from 'clsx';

import { ICard } from '..';

const CardBody = ({ invitationType, title }: Pick<ICard, 'invitationType' | 'title'>) => {
  return (
    <div
      className={clsx(
        'absolute left-1/2 -translate-x-1/2 w-[100px] h-[60px] flex items-center justify-center',
        'text-base font-semibold leading-tight tracking-[-0.32px] text-white drop-shadow-moduleText text-center',
        invitationType === 'SENT' ? 'top-[79px]' : 'top-[68px]',
      )}
    >
      {title}
    </div>
  );
};

export default CardBody;
