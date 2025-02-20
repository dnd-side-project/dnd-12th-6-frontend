'use client';

import { useParams, useRouter } from 'next/navigation';

import CardDisplay from '@/components/card/CardDisplay';
import Icon from '@/components/common/Icon';
import { IInvitation } from '@/lib/invitation/types';
import { getDdayInfo, formatDateForManage } from '@/utils/format/formatDate';

const InvitationManage = () => {
  const { id } = useParams();
  const router = useRouter();

  const date = '2025-02-19T20:30:00';
  const card: IInvitation = {
    title: '초대장 제목을 입력해주세요.',
    theme: 'heart',
    fontName: 'basic',
    sticker: 'sparkle',
    background: 'purple',
    backgroundImageData: '',
  };

  return (
    <div className='w-full px-[18px] bg-white'>
      <p className='flex flex-col gap-y-4 px-4 pt-20 pb-[18px] text-nowrap'>
        {!getDdayInfo(date).isPassed && (
          <span className='typo-label1 font-medium text-primary-strong'>
            D-{getDdayInfo(date).dDay}
          </span>
        )}
        <span className='typo-title font-bold text-gray-7'>
          {getDdayInfo(date).isPassed ? '모임이 종료되었어요' : '모임 준비가 진행 중이에요'}
        </span>
        {getDdayInfo(date).isPassed && (
          <span className='typo-label1 font-medium text-gray-4'>
            모임이 취소되었거나 초대 기간이 끝났습니다
          </span>
        )}
      </p>
      <div className='w-full min-w-320 flex gap-x-20 pr-20 items-center border border-gray-2 rounded-[10px]'>
        <div
          className='w-[150px] h-[150px] shrink-0 rounded-l-[10px] flex items-center justify-center'
          style={{
            backgroundImage:
              card.background === 'custom'
                ? `url(${card.backgroundImageData})`
                : `url(/images/background/background_${card.background}.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onClick={() => router.push(`/invite/${id}`)}
        >
          <div className='scale-[0.4]'>
            <CardDisplay
              title={card.title}
              theme={card.theme}
              fontName={card.fontName}
              sticker={card.sticker}
            />
          </div>
        </div>
        <div className='w-full h-[150px] flex flex-col justify-center items-start gap-y-16'>
          <div className='flex gap-x-4 typo-label1 font-semibold text-gray-6'>
            <Icon name='location_history' className='w-20 h-20 shrink-0' />
            <div className='line-clamp-3'>우리집</div>
          </div>
          <div className='flex gap-x-4 typo-label1 font-semibold text-gray-6'>
            <Icon name='time_history' className='w-20 h-20' />
            {formatDateForManage(date)}
          </div>
          <div className='flex gap-x-4 typo-label1 font-semibold text-gray-6'>
            <Icon name='user_history' className='w-20 h-20' />
            {'5명'}
          </div>
        </div>
      </div>
      <div className='w-full flex gap-x-10 pt-[14px] pb-[50px] text-nowrap'>
        <button className={ButtonStyle}>
          <Icon name='view' className='w-17 h-17 text-gray-7' />
          미리보기
        </button>
        <button className={ButtonStyle}>
          <Icon name='edit' className='w-16 h-16 text-gray-7' />
          편집하기
        </button>
      </div>
    </div>
  );
};

const ButtonStyle =
  'flex justify-center items-center gap-x-[5px] w-full py-10 rounded-sm bg-primary-natural border border-primary-assistive typo-label1 font-medium text-gray-7';

export default InvitationManage;
