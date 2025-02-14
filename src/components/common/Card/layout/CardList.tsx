import clsx from 'clsx';
import Link from 'next/link';

import Card, { ICard } from '..';
import { Button } from '../../Button';
import Icon from '../../Icon';

interface CardListProps {
  cards: ICard[];
  lastCardRef: (node?: Element | null) => void;
}
const CardList = ({ cards, lastCardRef }: CardListProps) => {
  return (
    <div className='flex flex-col py-40 gap-y-12'>
      {cards.length === 0 ? (
        <div className='flex flex-col items-center my-40'>
          <Icon name='invite_empty' className='w-[72px]' />
          <div className='typo-caption1 font-bold text-gray-5 mt-16'>아직 초대장이 없어요.</div>
          <Link href='/create'>
            <Button className='mt-40 w-56 rounded-lg typo-label1 font-bold text-white'>
              초대장 만들러 가기
            </Button>
          </Link>
        </div>
      ) : (
        cards.map((card, index) => (
          <div
            key={index}
            ref={index === cards.length - 1 ? lastCardRef : undefined}
            className={clsx('flex', index % 2 === 0 ? 'justify-start ml-40' : 'justify-end mr-40')}
          >
            <Card card={card} />
          </div>
        ))
      )}
    </div>
  );
};

export default CardList;
