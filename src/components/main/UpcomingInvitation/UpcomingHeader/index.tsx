interface UpcomingHeaderProps {
  isEmpty: boolean;
}
const UpcomingHeader = ({ isEmpty }: UpcomingHeaderProps) => {
  return (
    <div className='flex flex-col gap-y-[3px] px-4'>
      <header className='font-nexon text-lg leading-[25.2px]'>
        {isEmpty ? '모임을 만들어보세요' : '모임이 다가오고 있어요'}
      </header>
      <div className='typo-label1 font-medium text-gray-6'>
        {isEmpty
          ? '초대장으로 모임의 의미를 더해보세요!'
          : 'n개의 모임이 n일 이내에 약속되어 있어요.'}
      </div>
    </div>
  );
};

export default UpcomingHeader;
