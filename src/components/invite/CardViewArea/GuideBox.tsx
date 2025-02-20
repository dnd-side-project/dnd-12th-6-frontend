import Icon from '@/components/common/Icon';

const GuideBox = () => {
  return (
    <div className='absolute bottom-[30px] left-1/2 -translate-x-1/2 flex flex-col gap-2 items-center z-10'>
      <button className='min-w-[210px] h-[44px] px-32 typo-body font-semi text-nowrap rounded-round bg-blur-white-60 border border-blur-white-30'>
        내려서 자세한 정보 보기
      </button>
      <Icon name='arrow_down' className='w-[30px] h-[30px] text-white' />
    </div>
  );
};

export default GuideBox;
