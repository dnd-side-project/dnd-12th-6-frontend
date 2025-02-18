import clsx from 'clsx';

import { stickerArray } from '@/lib/invitation/types';
import { useInvitationStore } from '@/store/invitationStore';

export const StickerSelect = () => {
  const { invitation, setInvitation } = useInvitationStore();

  const stickerButtons = [...stickerArray, ...Array(8 - stickerArray.length).fill(null)];
  const firstRow = stickerButtons.slice(0, 4);
  const secondRow = stickerButtons.slice(4, 8);

  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-y-20'>
      {[firstRow, secondRow].map((row, rowIndex) => (
        <div key={rowIndex} className='w-full max-w-[360px] flex items-center justify-between'>
          {row.map((sticker, index) => (
            <button
              key={index}
              className={clsx(
                'w-[50px] h-[50px] border-2 bg-gray-1 rounded-full transition-colors duration-150',
                sticker === invitation.sticker ? 'border-primary-strong' : 'border-gray-1',
              )}
              onClick={sticker ? () => setInvitation({ ...invitation, sticker }) : undefined}
            >
              {sticker ? sticker : ''}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
