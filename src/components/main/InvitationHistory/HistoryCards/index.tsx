import CardScroller from '@/components/common/Card/layout/CardScroller';
import CardDataFetcher from '@/components/common/Card/modules/CardDataFetcher';
import { invitationType } from '@/lib/invitation';

interface HistoryCardsProps {
  historyType: invitationType;
}
const HistoryCards = ({ historyType }: HistoryCardsProps) => {
  return (
    <div className='flex flex-col gap-y-24 mt-24'>
      <CardDataFetcher historyType={historyType}>
        {(cards) => <CardScroller cards={cards} />}
      </CardDataFetcher>
    </div>
  );
};

export default HistoryCards;
