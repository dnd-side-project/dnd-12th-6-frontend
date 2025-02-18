import clsx from 'clsx';

import Icon from '@/components/common/Icon';

import { selectType } from '.';

interface SelectTabsProps {
  selected: selectType;
  setSelected: (selected: selectType) => void;
}

//TODO: 아이콘 수정

export const SelectTabs = ({ selected, setSelected }: SelectTabsProps) => {
  const tabs: { label: string; value: selectType }[] = [
    { label: '편지지', value: 'theme' },
    { label: '제목', value: 'title' },
    { label: '스티커', value: 'sticker' },
    { label: '배경', value: 'background' },
  ];

  return (
    <div className='w-full h-40 px-[30px] bg-white shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.10)] border-t border-gray-2 inline-flex justify-between items-center'>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setSelected(tab.value)}
          className={clsx(
            'max-w-[120px] w-120 h-40 grow justify-center items-center inline-flex self-stretch gap-0.5 typo-label1 font-medium whitespace-nowrap transition-colors duration-150',
            selected === tab.value
              ? 'border-b-2 border-primary-strong text-primary-strong'
              : 'border-b-2 border-transparent text-gray-6',
          )}
        >
          <Icon name='back' className='w-20 h-20' />
          {tab.label}
        </button>
      ))}
    </div>
  );
};
