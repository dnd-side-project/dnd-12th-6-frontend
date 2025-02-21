import { cva } from 'class-variance-authority';
import Image from 'next/image';

import { InvitationDTO } from '@/lib/invitation';

const CardHeader = ({
  invitationType,
  sticker,
  organizerName,
  hostProfileImageUrl,
}: Pick<InvitationDTO, 'invitationType' | 'sticker' | 'organizerName' | 'hostProfileImageUrl'>) => {
  return (
    <div className={cardHeaderVariants({ invitationType })}>
      {invitationType === 'CREATOR' && (
        <Image
          src={`/images/sticker/sticker_${sticker}_module.png`}
          alt='sticker'
          width={58}
          height={58}
        />
      )}
      {invitationType === 'INVITED' && (
        <>
          <div className='w-[38px] h-[38px] rounded-full border-2 border-white drop-shadow-moduleProfile'>
            <Image
              src={
                hostProfileImageUrl
                  ? 'https://avatar.iran.liara.run/public'
                  : '/images/user/profile_default_image.svg'
              }
              alt='profile'
              width={36}
              height={36}
            />
          </div>
          <div className='w-fit mt-6 px-8 py-4 bg-white opacity-80 rounded-md typo-caption1 text-gray-7'>
            <span className='font-semibold mr-2'>From.</span>
            <span className='font-regular'>{organizerName}</span>
          </div>
        </>
      )}
    </div>
  );
};

const cardHeaderVariants = cva('w-[180px] absolute top-10', {
  variants: {
    invitationType: {
      CREATOR: 'flex justify-center',
      INVITED: 'h-[68px] flex flex-col items-center',
    },
  },
});

export default CardHeader;
