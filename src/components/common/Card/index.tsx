import CardBody from './ui/CardBody';
import CardContainer from './ui/CardContainer';
import CardFooter from './ui/CardFooter';
import CardHeader from './ui/CardHeader';

export interface ICard {
  invitationType: 'SENT' | 'RECEIVED';
  title: string;
  date: string;
  template: string;
  sticker: string;
  font: string;
  hostName?: string;
  hostProfileImg?: string;
}

interface CardProps {
  card: ICard;
}
const Card = ({ card }: CardProps) => {
  return (
    <CardContainer>
      <CardHeader invitationType={card.invitationType} hostName={card.hostName} />
      <CardBody invitationType={card.invitationType} title={card.title} />
      <CardFooter date={card.date} />
    </CardContainer>
  );
};

export default Card;
