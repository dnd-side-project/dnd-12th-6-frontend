import CardScroller from '@/components/common/Card/layout/CardScroller';
import CardDataFetcher from '@/components/common/Card/modules/CardDataFetcher';

interface HistoryCardsProps {
  historyType: 'SENT' | 'RECEIVED';
}
const HistoryCards = ({ historyType }: HistoryCardsProps) => {
  // TODO: historyType에 따라 다른 데이터를 fetch
  console.log(historyType);
  return (
    <div className='flex flex-col gap-y-24 mt-24'>
      <CardDataFetcher>{(cards) => <CardScroller cards={cards} />}</CardDataFetcher>
    </div>
  );
};

export default HistoryCards;
