export const themeArray = ['confetti', 'heart', 'mono', 'lucky'] as const;
export type themeType = (typeof themeArray)[number];
export const themeUIType = {
  confetti: 'envelope',
  heart: 'card',
  mono: 'envelope',
  lucky: 'envelope',
};

export const stickerArray = ['none', 'sparkle', 'confetti', 'mono', 'cloud'] as const;
export type stickerType = (typeof stickerArray)[number];

export const fontArray = ['basic', 'bold', 'cute'] as const;
export type fontType = (typeof fontArray)[number];

export const backgroundArray = ['custom', 'purple', 'check', 'confetti', 'blue'] as const;
export type backgroundType = (typeof backgroundArray)[number];

export type invitationType = 'CREATOR' | 'INVITED';
/**
 * 초대장 꾸미기 정보
 * - theme: 편지지
 * - title: 제목
 * - sticker: 스티커
 * - fontName: 폰트
 * - backgroundImageData: 배경 이미지 데이터
 */
export interface IInvitation {
  theme: themeType;
  title: string;
  sticker: stickerType;
  fontName: fontType;
  background: backgroundType;
  backgroundImageData: string | null;
}

export interface InvitationDTO {
  creatorId: number;
  invitationId: number;
  createdAt: string;
  updatedAt: string;
  place: string;
  detailAddress: string;
  date: string;
  maxAttenances: number;
  description: string;
  state: 'InProgress' | 'Completed' | 'Canceled';
  link: string;
  invitationType: invitationType;
  fontName: fontType;
  sticker: stickerType;
  title: string;
  backgroundImageData: string | null;
  organizerName: string;
  themeName: themeType;
  basicBakgroundType: backgroundType;
  hostProfileImageUrl: string | null;
}
