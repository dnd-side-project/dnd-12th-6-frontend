import { InvitationDTO } from '@/lib/invitation/types';

import CardBody from './ui/CardBody';
import CardContainer from './ui/CardContainer';
import CardFooter from './ui/CardFooter';
import CardHeader from './ui/CardHeader';

interface CardProps {
  card: InvitationDTO;
}
const Card = ({ card }: CardProps) => {
  return (
    <CardContainer theme={card.themeName}>
      <CardHeader
        invitationType={card.invitationType}
        organizerName={card.organizerName}
        sticker={card.sticker}
        hostProfileImageUrl={card.hostProfileImageUrl}
      />
      <CardBody invitationType={card.invitationType} title={card.title} fontName={card.fontName} />
      <CardFooter date={card.date} />
    </CardContainer>
  );
};

export default Card;
