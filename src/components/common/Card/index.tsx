import { InvitationDTO } from '@/lib/invitation';

import CardBody from './ui/CardBody';
import CardContainer from './ui/CardContainer';
import CardFooter from './ui/CardFooter';
import CardHeader from './ui/CardHeader';

interface CardProps {
  card: InvitationDTO;
}
const Card = ({ card }: CardProps) => {
  return (
    <CardContainer>
      <CardHeader invitationType={card.invitationType} creatorId={card.creatorId} />
      <CardBody invitationType={card.invitationType} title={card.title} />
      <CardFooter date={card.date} />
    </CardContainer>
  );
};

export default Card;
