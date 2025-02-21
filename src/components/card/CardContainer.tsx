'use client';

import CardResetButton from '@/components/card/CardResetButton';
import CardSelect from '@/components/card/CardSelect';
import { useInvitationStore } from '@/store/invitationStore';

import CardEditView from './CardEditView';

const CardContainer = () => {
  const { invitation } = useInvitationStore();

  return (
    <div
      className='relative w-full min-h-[600px] h-[calc(100dvh-54px)] pb-[210px] flex items-center justify-center'
      style={{
        backgroundImage: invitation.background
          ? `url(/images/background/background_${invitation.background}.png)`
          : `url(${invitation.backgroundImageData})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CardResetButton />
      <CardEditView />
      <CardSelect />
    </div>
  );
};

export default CardContainer;
