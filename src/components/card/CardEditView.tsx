import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';

import AlertToast from '@/components/common/AlertToast';
import { useInvitationStore } from '@/store/invitationStore';

const CardEditView = () => {
  const { invitation, setInvitation } = useInvitationStore();
  const [type] = useState<'card' | 'envelop'>('card');
  const [isEditing, setIsEditing] = useState(false);
  const [isToastVisible, setToastVisible] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '28px';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [invitation.title]);

  return (
    <>
      {isEditing && <div className='fixed inset-0 bg-static-dimmer z-50'></div>}
      <div className='relative bg-blue-100 w-[300px] h-[350px]'>
        <div className='z-[80] w-[300px] h-[300px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
          <div
            className={clsx(
              'z-[70] w-160 h-80 absolute left-1/2 -translate-x-1/2 flex items-center justify-center',
              type === 'card' ? 'top-[117px]' : 'top-[70px]',
            )}
          >
            <textarea
              value={invitation.title}
              onChange={(e) => {
                if (e.target.value.length <= 20)
                  setInvitation({ ...invitation, title: e.target.value });
                else setToastVisible(true);
              }}
              ref={textareaRef}
              placeholder={'초대장 제목을 입력해주세요.'}
              onFocus={() => setIsEditing(true)}
              onBlur={() => setIsEditing(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  setIsEditing(false);
                }
              }}
              className={clsx(
                'z-[100] w-160 text-center bg-transparent placeholder-white text-white drop-shadow-textShadow focus:outline-none resize-none overflow-hidden',
                invitation.fontName === 'basic' && 'font-sans typo-title font-bold',
                invitation.fontName === 'bold' && 'font-gmarketsans typo-gmarketSans font-medium',
                invitation.fontName === 'cute' &&
                  'font-baskinrobbins typo-baskinrobbins font-regular',
              )}
            />
          </div>
        </div>
      </div>
      <AlertToast
        message='글자 수가 초과되었습니다. (최대 20자)'
        isVisible={isToastVisible}
        onClose={() => setToastVisible(false)}
      />
    </>
  );
};

export default CardEditView;
