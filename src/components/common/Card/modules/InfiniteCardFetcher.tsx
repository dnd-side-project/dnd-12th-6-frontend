'use client';

import { useInvitationTabStore } from '@/store/invitationListStore';

import { ICard } from '..';

const data: ICard[] = [
  {
    invitationType: 'SENT',
    title: '마라탕원 급구!! 마라샹궈도 좋음',
    date: '2025-02-16T12:30:00',
    template: 'template',
    sticker: 'sticker',
    font: 'font',
    hostName: '누구누구',
  },
  {
    invitationType: 'RECEIVED',
    title: '성심당 빵 모임',
    date: '2025-02-18T16:30:00',
    template: 'template',
    sticker: 'sticker',
    font: 'font',
    hostName: '누구누구',
  },
  {
    invitationType: 'SENT',
    title: '마라탕원 급구!! 마라샹궈도 좋음',
    date: '2025-02-16T12:30:00',
    template: 'template',
    sticker: 'sticker',
    font: 'font',
    hostName: '누구누구',
  },
  {
    invitationType: 'RECEIVED',
    title: '성심당 빵 모임',
    date: '2025-02-18T16:30:00',
    template: 'template',
    sticker: 'sticker',
    font: 'font',
    hostName: '누구누구',
  },
];
const dummyData = {
  all: data,
  sent: [],
  received: [],
};

interface Props {
  children: (cards: ICard[]) => JSX.Element;
}
export default function InfiniteCardFetcher({ children }: Props) {
  const { selectedTab } = useInvitationTabStore();

  return <>{children(dummyData[selectedTab])}</>;
}
