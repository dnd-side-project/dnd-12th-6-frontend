import clsx from 'clsx';

import { themeArray } from '@/lib/invitation/types';
import { useInvitationStore } from '@/store/invitationStore';

export const ThemeSelect = () => {
  const { invitation, setInvitation } = useInvitationStore();

  const themeButtons = [...themeArray, ...Array(8 - themeArray.length).fill(null)];
  const firstRow = themeButtons.slice(0, 4);
  const secondRow = themeButtons.slice(4, 8);

  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-y-20'>
      {[firstRow, secondRow].map((row, rowIndex) => (
        <div key={rowIndex} className='w-full max-w-[360px] flex items-center justify-between'>
          {row.map((theme, index) => (
            <button
              key={index}
              className={clsx(
                'w-[50px] h-[50px] border-2 bg-gray-1 rounded-full transition-colors duration-100 bg-cover',
                theme === invitation.theme ? 'border-primary-strong' : 'border-gray-1',
              )}
              style={{
                backgroundImage: `url(/images/card/envelope_${theme}.png)`,
              }}
              onClick={theme ? () => setInvitation({ ...invitation, theme }) : undefined}
            ></button>
          ))}
        </div>
      ))}
    </div>
  );
};
