import InviteMessage from './InviteMessage';

const InviteResponseList = () => {
  return (
    <div className='mt-[22px]'>
      <div className='mb-[22px] flex flex-col gap-[22px]'>
        <InviteMessage />
        <InviteMessage />
        <InviteMessage />
        <InviteMessage />
      </div>
      <div className='h-[46px] content-center text-center'>
        <button className='type-body font-bold'>더보기</button>
      </div>
    </div>
  );
};

export default InviteResponseList;
