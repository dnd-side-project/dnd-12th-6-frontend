'use client';

import clsx from 'clsx';

import CardImageView from '@/components/card/CardDisplay/CardImageView';
import { fontType, stickerType, themeType, themeUIType } from '@/lib/invitation/types';

interface CardEditViewProps {
  title: string;
  theme: themeType;
  fontName: fontType;
  sticker: stickerType;
}
const CardDisplay = ({ title, theme, fontName, sticker }: CardEditViewProps) => {
  return (
    <div className='relative w-[300px] h-[350px]'>
      <div className='z-[80] w-[300px] h-[300px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
        <div
          className={clsx(
            'w-160 h-80 absolute left-1/2 -translate-x-1/2 flex items-center justify-center',
            'text-center text-white drop-shadow-textShadow',
            themeUIType[theme] === 'card' ? 'top-[117px]' : 'top-[70px]',
            fontName === 'basic' && 'font-sans typo-title font-bold',
            fontName === 'bold' && 'font-gmarketsans typo-gmarketSans font-medium',
            fontName === 'cute' && 'font-baskinrobbins typo-baskinrobbins font-regular',
          )}
        >
          {title}
        </div>
      </div>
      <CardImageView theme={theme} sticker={sticker} />
    </div>
  );
};

export default CardDisplay;
