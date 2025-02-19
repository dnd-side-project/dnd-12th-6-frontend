import { stickerType, fontType, themeType } from '@/lib/invitation/types';

import CardBody from './ui/CardBody';
import CardContainer from './ui/CardContainer';
import CardFooter from './ui/CardFooter';
import CardHeader from './ui/CardHeader';

export interface ICard {
  invitationType: 'CREATOR' | 'INVITED';
  title: string;
  date: string;
  theme: themeType;
  sticker: stickerType;
  fontName: fontType;
  hostName?: string;
  hostProfileImg?: string;
}

interface CardProps {
  card: ICard;
}
const Card = ({ card }: CardProps) => {
  return (
    <CardContainer theme={card.theme}>
      <CardHeader
        invitationType={card.invitationType}
        hostName={card.hostName}
        sticker={card.sticker}
        hostProfileImg={card.hostProfileImg}
      />
      <CardBody invitationType={card.invitationType} title={card.title} fontName={card.fontName} />
      <CardFooter date={card.date} />
    </CardContainer>
  );
};

export default Card;
