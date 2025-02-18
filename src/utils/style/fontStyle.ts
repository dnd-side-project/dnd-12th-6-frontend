import { fontType } from '@/lib/invitation/types';

const createFontStyle = (font: fontType) => {
  switch (font) {
    case 'basic':
      return 'font-sans typo-title font-bold';

    case 'bold':
      return 'font-gmarketsans typo-gmarket font-medium';

    case 'cute':
      return 'font-baskinrobbins typo-baskinrobbins font-regular';

    default:
      return '';
  }
};

export default createFontStyle;
