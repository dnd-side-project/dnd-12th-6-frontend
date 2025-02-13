import { cva } from 'class-variance-authority';
import Image from 'next/image';
import stickerImage from 'public/images/sticker/01-Sticker-Module.png';

import { ICard } from '..';

const CardHeader = ({ invitationType, hostName }: Pick<ICard, 'invitationType' | 'hostName'>) => {
  return (
    <div className={cardHeaderVariants({ invitationType })}>
      {invitationType === 'RECEIVED' && (
        <Image src={stickerImage} alt='sticker' width={58} height={58} />
      )}
      {invitationType === 'SENT' && (
        <>
          <div className='w-[38px] h-[38px] rounded-full border-2 border-white drop-shadow-moduleProfile'>
            <Image src={'https://avatar.iran.liara.run/public'} alt='host' width={36} height={36} />
          </div>
          <div className='w-fit mt-6 px-8 py-4 bg-white opacity-80 rounded-md typo-caption1 text-gray-7'>
            <span className='font-semibold mr-2'>From.</span>
            <span className='font-regular'>{hostName}</span>
          </div>
        </>
      )}
    </div>
  );
};

const cardHeaderVariants = cva('w-[180px] absolute top-10', {
  variants: {
    invitationType: {
      RECEIVED: 'flex justify-center',
      SENT: 'h-[68px] flex flex-col items-center',
    },
  },
});

export default CardHeader;
