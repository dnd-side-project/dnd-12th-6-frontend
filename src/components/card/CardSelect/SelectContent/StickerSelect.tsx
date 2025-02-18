import clsx from 'clsx';

import Icon from '@/components/common/Icon';
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
                'flex justify-center items-center w-[50px] h-[50px] border-2 bg-gray-1 rounded-full transition-colors duration-150 bg-contain',
                sticker === invitation.sticker ? 'border-primary-strong' : 'border-gray-1',
                sticker === 'none' && 'bg-gray-6',
              )}
              style={{
                backgroundImage: sticker
                  ? `url(/images/sticker/sticker_${sticker}_module.png)`
                  : 'none',
              }}
              onClick={sticker ? () => setInvitation({ ...invitation, sticker }) : undefined}
            >
              {sticker === 'none' && <Icon name='close' className='w-20 h-20' />}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
