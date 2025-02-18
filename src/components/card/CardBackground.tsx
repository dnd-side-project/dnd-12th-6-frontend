'use client';

import ResetButton from '@/components/card/ResetButton';
import SelectSection from '@/components/card/SelectSection';
import { useInvitationStore } from '@/store/invitationStore';

import CardSection from './CardSection';

const CardBackground = () => {
  const { invitation } = useInvitationStore();

  return (
    <div
      className='relative w-full min-h-[680px] h-[calc(100dvh-54px)] pb-[210px] flex items-center justify-center'
      style={{
        backgroundImage: invitation.backgroundImageData
          ? `url(${invitation.backgroundImageData})`
          : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ResetButton />
      <CardSection />
      <SelectSection />
    </div>
  );
};

export default CardBackground;
