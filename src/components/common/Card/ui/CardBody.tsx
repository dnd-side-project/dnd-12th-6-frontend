'use client';

import clsx from 'clsx';

import { ICard } from '..';

const CardBody = ({
  invitationType,
  title,
  fontName,
}: Pick<ICard, 'invitationType' | 'title' | 'fontName'>) => {
  return (
    <div
      className={clsx(
        'absolute left-1/2 -translate-x-1/2 w-[100px] h-[60px] flex items-center justify-center',
        'text-base leading-tight tracking-[-0.32px] text-white drop-shadow-moduleText text-center',
        invitationType === 'INVITED' ? 'top-[90px]' : 'top-[78px]',
        fontName === 'basic' && 'font-sans font-semibold',
        fontName === 'bold' && 'font-gmarketsans',
        fontName === 'cute' && 'font-baskinrobbins',
      )}
    >
      {title}
    </div>
  );
};

export default CardBody;
