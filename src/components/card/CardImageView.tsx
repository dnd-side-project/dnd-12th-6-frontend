import { IInvitation } from '@/lib/invitation/types';

interface CardImageViewProps {
  invitation: IInvitation;
}
const CardImageView = ({ invitation }: CardImageViewProps) => {
  return (
    <div
      className='w-[300px] h-[300px] absolute top-[23px] bg-cover'
      style={{
        backgroundImage: `url(/images/card/envelope_${invitation.theme}.png)`,
      }}
    >
      <div className='w-full h-[90px] absolute top-[-23px]'>
        <div
          className='h-full bg-no-repeat bg-left bg-contain'
          style={{
            backgroundImage:
              invitation.sticker !== 'none'
                ? `url(/images/sticker/sticker_${invitation.sticker}_L.png)`
                : 'none',
          }}
        />
      </div>
      <div className='w-full h-[90px] absolute bottom-[-27px]'>
        <div
          className='h-full bg-no-repeat bg-right bg-contain'
          style={{
            backgroundImage:
              invitation.sticker !== 'none'
                ? `url(/images/sticker/sticker_${invitation.sticker}_R.png)`
                : 'none',
          }}
        />
      </div>
    </div>
  );
};

export default CardImageView;
