import clsx from 'clsx';

import { backgroundArray, backgroundType } from '@/lib/invitation/types';
import { useInvitationStore } from '@/store/invitationStore';

import { UploadBackgroundButton } from './UploadBackgroundButton';

export const BackgroundSelect = () => {
  const { invitation, setInvitation } = useInvitationStore();

  const backgroundButtons = [...backgroundArray, ...Array(8 - backgroundArray.length).fill(null)];
  const firstRow = backgroundButtons.slice(1, 4);
  const secondRow = backgroundButtons.slice(4, 8);

  const handleChangeBackground = (background?: backgroundType) => {
    if (background) setInvitation({ ...invitation, background });
  };

  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-y-20'>
      <div className='w-full max-w-[360px] flex items-center justify-between'>
        <UploadBackgroundButton />
        {firstRow.map((background, index) => (
          <button
            key={index}
            className={clsx(
              'w-[50px] h-[50px] border-2 bg-gray-1 rounded-full transition-colors duration-150',
              background === invitation.background ? 'border-primary-strong' : 'border-gray-1',
            )}
            style={{
              backgroundImage: background
                ? `url(/images/background/background_${background}.png)`
                : 'none',
            }}
            onClick={() => handleChangeBackground(background)}
          />
        ))}
      </div>

      <div className='w-full max-w-[360px] flex items-center justify-between'>
        {secondRow.map((background, index) => (
          <button
            key={index}
            className={clsx(
              'w-[50px] h-[50px] border-2 bg-gray-1 rounded-full transition-colors duration-150',
              background === invitation.background ? 'border-primary-strong' : 'border-gray-1',
            )}
            style={{
              backgroundImage: background
                ? `url(/images/background/background_${background}.png)`
                : 'none',
            }}
            onClick={() => handleChangeBackground(background)}
          />
        ))}
      </div>
    </div>
  );
};
