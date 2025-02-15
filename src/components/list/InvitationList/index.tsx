'use client';

import CardList from '@/components/common/Card/layout/CardList';
import InfiniteCardFetcher from '@/components/common/Card/modules/InfiniteCardFetcher';

export default function InvitationList() {
  return (
    <div className='absolute top-[209px] w-full'>
      <InfiniteCardFetcher>{(cards) => <CardList cards={cards} />}</InfiniteCardFetcher>
    </div>
  );
}
