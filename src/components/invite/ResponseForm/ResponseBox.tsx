'use client';

import Icon from '@/components/common/Icon';
import { cn } from '@/lib/utils';

export type ResponseType = '참석' | '불참' | '고민';

interface ResponseBoxProps {
  value: ResponseType | string;
  onClick: (value: string) => void;
}

const ResponseBox = ({ value, onClick }: ResponseBoxProps) => {
  const buttonStyle =
    'h-[112px] flex-1 flex flex-col items-center justify-center gap-4 rounded-[15px]';

  const getButtonStyle = (type: ResponseType) => {
    if (value === '') {
      return ''; // 빈 값일 때 (기본 상태)
    }
    return value === type
      ? 'text-white ' +
          (type === '참석'
            ? 'bg-[#4F8AFF]'
            : type === '불참'
              ? 'bg-[#F75D5B] text-[#BA1816]'
              : 'bg-[#FFC64C]') // 활성화된 상태
      : 'text-gray-4 bg-gray-1'; // 비활성화된 상태
  };

  return (
    <div>
      <div className='flex gap-8'>
        <button
          type='button'
          className={cn(buttonStyle, 'bg-[#EDF3FF] text-[#4986FF]', getButtonStyle('참석'))}
          onClick={() => onClick('참석')}
        >
          <Icon name='hand_ok' className='w-32 h-32' />
          <span className={cn('typo-body font-semibold', value === '참석' && 'text-white')}>
            참석해요
          </span>
        </button>
        <button
          type='button'
          className={cn(buttonStyle, 'bg-[#FFF1F1] text-[#EF4452]', getButtonStyle('불참'))}
          onClick={() => onClick('불참')}
        >
          <Icon name='block' className='w-32 h-32' />
          <span className={cn('typo-body font-semibold', value === '불참' && 'text-white')}>
            불참해요
          </span>
        </button>
      </div>
      <button
        type='button'
        className={cn(
          'h-[56px] w-full mt-8 flex items-center justify-center gap-6 text-[#F79D16] rounded-[12px] bg-[#FFF8EE]',
          getButtonStyle('고민'),
        )}
        onClick={() => onClick('고민')}
      >
        {value === '고민' ? (
          <Icon name='worry_emoji_on' className='w-32 h-32' />
        ) : value !== '고민' && value !== '' ? (
          <Icon name='worry_emoji_off' className='w-32 h-32' />
        ) : (
          <Icon name='worry_emoji' className='w-32 h-32' />
        )}
        <span className={cn('typo-body font-semibold', value === '고민' && 'text-white')}>
          고민중이에요
        </span>
      </button>
    </div>
  );
};

export default ResponseBox;
