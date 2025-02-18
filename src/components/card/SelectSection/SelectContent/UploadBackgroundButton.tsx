import clsx from 'clsx';
import { useRef, useState } from 'react';

import Icon from '@/components/common/Icon';
import { useInvitationStore } from '@/store/invitationStore';

export const UploadBackgroundButton = () => {
  const { invitation, setInvitation } = useInvitationStore();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64Image = reader.result as string;

      setPreviewImage(base64Image);
      setInvitation({ ...invitation, backgroundImageData: base64Image });
    };
  };

  return (
    <>
      <input
        type='file'
        accept='image/*'
        ref={fileInputRef}
        className='hidden'
        onChange={handleImageUpload}
      />
      <button
        className={clsx(
          'relative w-[50px] h-[50px] border-2 bg-gray-6 rounded-full transition-colors duration-150 flex items-center justify-center',
          invitation.background === 'custom' ? 'border-primary-strong' : 'border-gray-6',
        )}
        style={{
          backgroundImage:
            invitation.backgroundImageData !== ''
              ? `url(${invitation.backgroundImageData})`
              : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={() => {
          fileInputRef.current?.click();
          setInvitation({ ...invitation, background: 'custom' });
        }}
      >
        {previewImage && (
          <div className='absolute inset-0 rounded-full bg-black bg-opacity-20 flex items-center justify-center' />
        )}
        {previewImage ? (
          <Icon name='minus' className='text-white w-20 h-20 z-20' />
        ) : (
          <Icon name='plus' className='text-white w-20 h-20' />
        )}
      </button>
    </>
  );
};
