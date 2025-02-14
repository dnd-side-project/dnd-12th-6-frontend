import Link from 'next/link';

import { Button } from '@/components/common/Button';
import Icon from '@/components/common/Icon';

import Card, { ICard } from '..';

interface CardScrollerProps {
  cards: ICard[];
}
const CardScroller = ({ cards }: CardScrollerProps) => {
  return (
    <>
      <div
        className='ml-[8px] px-10 flex space-x-16 overflow-x-auto [&::-webkit-scrollbar]:hidden'
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {cards.length === 0 ? (
          <div className='w-full h-[168px] mr-[18px] flex flex-col justify-center items-center'>
            <Icon name='invite_nodata' className='' />
            <div className='mt-8 typo-label1 font-medium text-gray-5'>아직 초대장이 없어요.</div>
          </div>
        ) : (
          cards.map((card, index) => <Card key={index} card={card} />)
        )}
      </div>
      {cards.length !== 0 ? (
        <Link href='/list' className='mx-[18px]'>
          <Button
            variant={'primaryLight'}
            className='w-full px-20 py-3.5 rounded-sm typo-body font-semibold'
          >
            전체보기
          </Button>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

export default CardScroller;
