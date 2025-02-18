import { useInvitationStore } from '@/store/invitationStore';

const CardImageView = () => {
  const { invitation } = useInvitationStore();

  return (
    <div
      className='w-[300px] h-[300px] absolute top-[23px] bg-cover'
      style={{
        backgroundImage: `url(/images/card/envelope_${invitation.theme}.png)`,
      }}
    ></div>
  );
};

export default CardImageView;
