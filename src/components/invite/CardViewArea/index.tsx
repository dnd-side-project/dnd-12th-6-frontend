'use client';

import CardDisplay from '@/components/card/CardDisplay';
import { InvitationDTO } from '@/lib/invitation';

import GuideBox from './GuideBox';
import InfoBox from './InfoBox';

// interface InvitationResponseType {
//   invitationId: number;
//   hostName: string;
//   place: string;
//   detail_address: string;
//   date: string;
//   maxAttendences: number;
//   description: string;
//   state: 'InProgress' | 'Completed';
//   link: string;
//   invitationTemplate: any;
//   invitationType: 'SENT' | 'RECEIVED';
// }

// const data: InvitationResponseType = {
//   invitationId: 1,
//   hostName: '라이',
//   place: '장소입니다',
//   detail_address: '장소 상세입니다.',
//   date: '2025-02-25T22:22',
//   maxAttendences: 1,
//   description: '메시지 내용입니다.',
//   state: 'InProgress',
//   link: '링크',
//   invitationTemplate: '',
//   invitationType: 'SENT',
// };

const CardViewArea = ({
  hostProfileImageUrl,
  organizerName,
  title,
  themeName,
  fontName,
  sticker,
}: Partial<InvitationDTO>) => {
  return (
    <div className='relative min-h-[calc(100dvh-60px)]'>
      <div className='w-full px-[30px] flex flex-col items-center gap-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <InfoBox hostProfileImageUrl={hostProfileImageUrl} organizerName={organizerName} />
        {/* <CardPreview
          leftSticker='/images/sticker/02-Sticker-L.png'
          rightSticker='/images/sticker/02-Sticker-L.png'
          card='/images/card/01-Envelope-Default Type.png'
          title='☔️🪻초대짱🪻☔️'
        /> */}
        <CardDisplay
          title={title || ''}
          theme={themeName || 'confetti'}
          fontName={fontName || 'basic'}
          sticker={sticker ?? 'none'}
        />
      </div>
      <GuideBox target='info_area' />
    </div>
  );
};

export default CardViewArea;
