export const themeArray = ['theme1', 'theme2', 'theme3'] as const;
export type themeType = (typeof themeArray)[number];

export const stickerArray = ['sticker1', 'sticker2', 'sticker3'] as const;
export type stickerType = (typeof stickerArray)[number];

export const fontArray = ['basic', 'bold', 'cute'] as const;
export type fontType = (typeof fontArray)[number];

export const backgroundArray = ['custom', 'purple', 'check', 'confetti', 'blue'] as const;
export type backgroundType = (typeof backgroundArray)[number];

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
