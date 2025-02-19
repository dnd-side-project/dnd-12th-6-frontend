const data = [
  {
    name: '홍길동',
    status: '참석',
    comment: '참석한다!!',
  },
  {
    name: '홍길동',
    status: '불참',
    comment: '',
  },
  {
    name: '홍길동',
    status: '고민중',
    comment:
      '텍스트 수가 길어질 때는 이렇게 보여집니다 최대 50자 테스트 동해물과 백두산이 마르고 닳',
  },
];

const ResponseContent = () => {
  return (
    <div className='w-full h-full bg-gray-1 px-20 py-32 flex flex-col divide-y divide-gray-2'>
      {data.map((item, index) => (
        <div key={index} className='py-16 flex flex-col gap-y-8'>
          <section id='profile' className='flex items-center gap-x-12'>
            <div
              id='profileImage'
              className='flex items-center justify-center shrink-0 w-40 h-40 rounded-full bg-primary-natural border-2 border-primary-normal 
              typo-heading font-bold text-center text-primary-strong'
            >
              {item.name[0]}
            </div>
            <div className='flex flex-col gap-y-6'>
              <div className='typo-caption1 font-medium text-gray-6'>25년 1월 12일</div>
              <div className='typo-body text-medium text-gray-5 font-medium'>
                <span className='font-semibold text-black'>{item.name}</span>님이 {item.status}해요.
              </div>
            </div>
          </section>
          {item.comment && (
            <section
              id='comment'
              className='flex flex-col relative w-full h-fit min-h-[57px] bg-message bg-contain bg-no-repeat'
            >
              <div className='mt-[11px] flex-1 bg-white rounded-sm px-[14px] py-12 typo-label1 font-regular text-black'>
                {item.comment}
              </div>
            </section>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResponseContent;
