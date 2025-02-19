import Icon from '@/components/common/Icon';

const InvitationManage = () => {
  return (
    <div className='w-full px-[18px] bg-white'>
      <p className='flex flex-col gap-y-4 px-4 pt-20 pb-[18px]'>
        <span className='typo-label1 font-medium text-primary-strong'>D-DAY</span>
        <span className='typo-title font-bold text-gray-7'>모임 준비가 진행 중이에요</span>
      </p>
      <div className='w-full p-8 flex gap-x-20 items-center border border-gray-2 rounded-[10px]'>
        <div className='w-[150px] h-[150px] shrink-0 border'>카드 섹션</div>
        <div className='w-full flex flex-col gap-y-16'>
          <div className='flex gap-x-4 typo-label1 font-semibold text-gray-6'>
            <Icon name='location_history' className='w-20 h-20' />
            {'우리집'}
          </div>
          <div className='flex gap-x-4 typo-label1 font-semibold text-gray-6'>
            <Icon name='time_history' className='w-20 h-20' />
            {'25.01.25 3:00'}
          </div>
          <div className='flex gap-x-4 typo-label1 font-semibold text-gray-6'>
            <Icon name='user_history' className='w-20 h-20' />
            {'5명'}
          </div>
        </div>
      </div>
      <div className='w-full flex gap-x-10 pt-[14px] pb-[50px]'>
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
