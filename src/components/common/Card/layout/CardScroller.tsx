import Card, { ICard } from '..';

interface CardScrollerProps {
  cards: ICard[];
}
const CardScroller = ({ cards }: CardScrollerProps) => {
  return (
    <div
      className='flex space-x-16 overflow-x-auto [&::-webkit-scrollbar]:hidden'
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default CardScroller;
