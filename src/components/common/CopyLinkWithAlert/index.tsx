'use client';

import clsx from 'clsx';

import useCopyLink from './useCopyLink';

interface CopyLinkProps {
  url: string;
  children: React.ReactElement;
}
const CopyLinkWithAlert = ({ url, children }: CopyLinkProps) => {
  const { copyLink, isCopied } = useCopyLink();

  return (
    <>
      <div onClick={() => copyLink(url)}>{children}</div>
      <div
        className={clsx(
          'z-[100] fixed top-80 left-0 right-0 flex justify-center',
          isCopied ? 'animate-slideDown opacity-100' : 'opacity-0 pointer-events-none',
        )}
      >
        <div
          className={clsx(
            'bg-primary-natural border border-primary-strong rounded-[40px] px-[14px] py-4',
            'typo-label1 font-medium text-primary-strong',
          )}
        >
          링크가 복사되었습니다
        </div>
      </div>
    </>
  );
};

export default CopyLinkWithAlert;
