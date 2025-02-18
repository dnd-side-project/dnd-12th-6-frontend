import clsx from 'clsx';

import { fontArray } from '@/lib/invitation/types';
import { useInvitationStore } from '@/store/invitationStore';

export const TitleSelect = () => {
  const { invitation, setInvitation } = useInvitationStore();

  const fontEnum = {
    basic: '기본체',
    bold: '강조체',
    cute: '깜찍체',
  };

  return (
    <div className='w-full max-w-[360px] h-full flex place-self-center justify-between items-center'>
      {fontArray.map((font, index) => {
        return (
          <div className='flex flex-col items-center gap-y-6' key={index}>
            <button
              key={index}
              className={clsx(
                'w-[50px] h-[50px] border-2 rounded-full transition-colors duration-150',
                font === invitation.fontName
                  ? 'border-primary-strong bg-primary-assistive text-primary-strong'
                  : 'border-gray-1 bg-gray-1 text-gray-6 ',
                font === 'basic' && 'font-sans typo-title font-bold',
                font === 'bold' && 'font-gmarketsans typo-gmarketSans font-medium',
                font === 'cute' && 'font-baskinrobbins typo-baskinrobbins font-regular',
              )}
              onClick={() => setInvitation({ ...invitation, fontName: font })}
            >
              가
            </button>
            <label
              className={clsx(
                'typo-body1 font-medium transition-colors duration-150',
                font === invitation.fontName ? 'text-primary-strong' : 'text-black',
              )}
            >
              {fontEnum[font]}
            </label>
          </div>
        );
      })}
    </div>
  );
};
