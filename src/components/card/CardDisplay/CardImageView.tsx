import { stickerType, themeType } from '@/lib/invitation/types';

interface CardImageViewProps {
  theme: themeType;
  sticker: stickerType;
}
const CardImageView = ({ theme, sticker }: CardImageViewProps) => {
  return (
    <div
      className='w-[300px] h-[300px] absolute top-[23px] bg-cover'
      style={{
        backgroundImage: `url(/images/card/envelope_${theme}.png)`,
      }}
    >
      <div className='w-full h-[90px] absolute top-[-23px]'>
        <div
          className='h-full bg-no-repeat bg-left bg-contain'
          style={{
            backgroundImage: `url(/images/sticker/sticker_${sticker}_L.png)`,
          }}
        />
      </div>
      <div className='w-full h-[90px] absolute bottom-[-27px]'>
        <div
          className='h-full bg-no-repeat bg-right bg-contain'
          style={{
            backgroundImage: `url(/images/sticker/sticker_${sticker}_R.png)`,
          }}
        />
      </div>
    </div>
  );
};

export default CardImageView;
