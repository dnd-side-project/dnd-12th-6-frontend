import CardScroller from '@/components/common/Card/layout/CardScroller';
import CardDataFetcher from '@/components/common/Card/modules/CardDataFetcher';
import PageContainer from '@/components/layout/PageContainer';

export default function Home() {
  return (
    <PageContainer header bottomNav>
      Main
      <CardDataFetcher>{(cards) => <CardScroller cards={cards} />}</CardDataFetcher>
    </PageContainer>
  );
}
