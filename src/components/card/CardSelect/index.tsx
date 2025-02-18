'use client';

import { useState } from 'react';

import { BackgroundSelect } from './SelectContent/BackgroundSelect';
import { StickerSelect } from './SelectContent/StickerSelect';
import { ThemeSelect } from './SelectContent/ThemeSelect';
import { TitleSelect } from './SelectContent/TitleSelect';
import { SelectTabs } from './SelectTabs';

export type selectType = 'theme' | 'title' | 'sticker' | 'background';

export default function CardSelect() {
  const [selected, setSelected] = useState<selectType>('theme');

  const renderContent = () => {
    switch (selected) {
      case 'theme':
        return <ThemeSelect />;

      case 'title':
        return <TitleSelect />;

      case 'sticker':
        return <StickerSelect />;

      case 'background':
        return <BackgroundSelect />;
    }
  };

  return (
    <div className='absolute left-0 right-0 bottom-0 flex flex-col'>
      <SelectTabs selected={selected} setSelected={setSelected} />
      <div className='w-full h-[176px] p-[30px] bg-white border-t border-gray-2'>
        {renderContent()}
      </div>
    </div>
  );
}
