'use client';

import CardSelect from '@/components/card/CardSelect';
import ResetButton from '@/components/card/ResetButton';
import { useInvitationStore } from '@/store/invitationStore';

import CardEditView from './CardEditView';

const CardContainer = () => {
  const { invitation } = useInvitationStore();

  return (
    <div
      className='relative w-full min-h-[600px] h-[calc(100dvh-54px)] pb-[210px] flex items-center justify-center'
      style={{
        backgroundImage: invitation.backgroundImageData
          ? `url(${invitation.backgroundImageData})`
          : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ResetButton />
      <CardEditView />
      <CardSelect />
    </div>
  );
};

export default CardContainer;
