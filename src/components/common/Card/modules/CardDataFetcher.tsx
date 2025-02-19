import { ICard } from '..';

const data: ICard[] = [
  {
    invitationType: 'CREATOR',
    title: '마라탕원 급구!! 마라샹궈도 좋음',
    date: '2025-02-16T12:30:00',
    theme: 'confetti',
    sticker: 'mono',
    fontName: 'basic',
    hostName: '누구누구',
  },
  {
    invitationType: 'INVITED',
    title: '성심당 빵 모임',
    date: '2025-02-18T16:30:00',
    theme: 'mono',
    sticker: 'mono',
    fontName: 'cute',
    hostName: '누구누구',
  },
  {
    invitationType: 'CREATOR',
    title: '2줄 케이스! 최대 20자',
    date: '2025-02-16T12:30:00',
    theme: 'heart',
    sticker: 'sparkle',
    fontName: 'bold',
    hostName: '누구누구',
  },
  {
    invitationType: 'INVITED',
    title: '영화보고 밥먹자',
    date: '2025-02-18T16:30:00',
    theme: 'lucky',
    sticker: 'cloud',
    fontName: 'cute',
    hostName: '개구리 중사 케로로',
  },
  {
    invitationType: 'CREATOR',
    title: '맛있는거 먹으러 갈사람?',
    date: '2025-02-18T16:30:00',
    theme: 'confetti',
    sticker: 'confetti',
    fontName: 'bold',
    hostName: '누구누구',
  },
  {
    invitationType: 'CREATOR',
    title: '나랑 놀자',
    date: '2025-02-18T16:30:00',
    theme: 'mono',
    sticker: 'mono',
    fontName: 'basic',
    hostName: '누구누구',
  },
];

interface Props {
  children: (cards: ICard[]) => JSX.Element;
}
export default function CardDataFetcher({ children }: Props) {
  return <>{children(data)}</>;
}
