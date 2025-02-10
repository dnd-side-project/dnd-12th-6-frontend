import CardScroller from '@/components/common/Card/layout/CardScroller';
import CardDataFetcher from '@/components/common/Card/modules/CardDataFetcher';

export default function Home() {
  return (
    <div>
      Main
      <CardDataFetcher>{(cards) => <CardScroller cards={cards} />}</CardDataFetcher>
    </div>
  );
}
