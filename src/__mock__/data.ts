import { InvitationDTO } from '@/lib/invitation';

const invitationMockData: InvitationDTO = {
  creatorId: 1,
  invitationId: 1,
  createdAt: '2025-02-16T12:30:00',
  updatedAt: '2025-02-16T12:30:00',
  place: '나의 최애 마라탕 플레이스',
  detailAddress: '서울시 강남구',
  date: '2025-02-16T12:30:00',
  maxAttendances: 5,
  description: '마라탕원에서 마라탕 먹어요',
  state: 'Completed',
  link: '',
  invitationType: 'CREATOR',
  fontName: 'basic',
  sticker: 'mono',
  title: '마라탕원 급구!! 마라샹궈도 좋음',
  backgroundImageData: null,
  organizerName: '누구누구',
  themeName: 'confetti',
  basicBackgroundType: 'purple',
  hostProfileImageUrl: null,
};

const invitationListMockData: InvitationDTO[] = [
  {
    creatorId: 1,
    invitationId: 1,
    createdAt: '2025-02-16T12:30:00',
    updatedAt: '2025-02-16T12:30:00',
    place: '나의 최애 마라탕 플레이스',
    detailAddress: '서울시 강남구',
    date: '2025-02-16T12:30:00',
    maxAttendances: 5,
    description: '마라탕원에서 마라탕 먹어요',
    state: 'Completed',
    link: '',
    invitationType: 'CREATOR',
    fontName: 'basic',
    sticker: 'mono',
    title: '마라탕원 급구!! 마라샹궈도 좋음',
    backgroundImageData: 'none',
    organizerName: '누구누구',
    themeName: 'mono',
    basicBackgroundType: 'purple',
    hostProfileImageUrl: null,
  },
  {
    creatorId: 1,
    invitationId: 1,
    createdAt: '2025-02-16T12:30:00',
    updatedAt: '2025-02-16T12:30:00',
    place: '대전 성심당 본점',
    detailAddress: '서울시 강남구',
    date: '2025-02-16T12:30:00',
    maxAttendances: 5,
    description: '나랑 빵 먹으러 갈래?',
    state: 'Canceled',
    link: '',
    invitationType: 'INVITED',
    fontName: 'cute',
    sticker: 'sparkle',
    title: '성심당 빵 모임',
    backgroundImageData: 'none',
    organizerName: '누구누구',
    themeName: 'heart',
    basicBackgroundType: 'blue',
    hostProfileImageUrl: null,
  },
  {
    creatorId: 2,
    invitationId: 1,
    createdAt: '2025-02-28T12:30:00',
    updatedAt: '2025-02-28T12:30:00',
    place: '용산 아이파크몰',
    detailAddress: '서울시 용산구',
    date: '2025-02-16T12:30:00',
    maxAttendances: 5,
    description: '영화보고 밥까지 풀코스로 놀자!',
    state: 'InProgress',
    link: '',
    invitationType: 'INVITED',
    fontName: 'bold',
    sticker: 'none',
    title: '영화보고 밥먹자',
    backgroundImageData: 'none',
    organizerName: '누구누구',
    themeName: 'lucky',
    basicBackgroundType: 'check',
    hostProfileImageUrl: null,
  },
  {
    creatorId: 3,
    invitationId: 1,
    createdAt: '2025-02-16T12:30:00',
    updatedAt: '2025-02-16T12:30:00',
    place: '집 근처 어디든',
    detailAddress: '서울시 강남구',
    date: '2025-02-16T12:30:00',
    maxAttendances: 5,
    description: '번개 모임! 2줄 케이스로 최대 20자',
    state: 'Completed',
    link: '',
    invitationType: 'CREATOR',
    fontName: 'basic',
    sticker: 'cloud',
    title: '맛있는거 먹으러 갈사람?',
    backgroundImageData: 'none',
    organizerName: '누구누구',
    themeName: 'confetti',
    basicBackgroundType: 'purple',
    hostProfileImageUrl: null,
  },
];

export { invitationMockData, invitationListMockData };
