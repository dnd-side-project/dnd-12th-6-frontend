import Image from 'next/image';
import KakaoSymbolImage from 'public/images/etc/kakao_symbol.png';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/common/Dialog/dialog';
import Icon from '@/components/common/Icon';
import { StrictPropsWithChildren } from '@/types/common';

const ShareModal = ({ children }: StrictPropsWithChildren) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='w-fit px-20'>
        <DialogHeader className='flex items-center'>
          <DialogTitle className='w-[255px] text-center typo-heading font-bold text-black'>
            공유하기
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className='my-40 flex gap-x-[38px] justify-center'>
          <DialogClose>
            <button className='flex flex-col items-center gap-y-8'>
              <div className='w-[60px] h-[60px] rounded-full bg-kakao flex items-center justify-center'>
                <Image src={KakaoSymbolImage} alt='카카오톡 공유' width={26} height={26} />
              </div>
              <span className='typo-label1 font-medium text-gray-7'>카카오톡 공유</span>
            </button>
          </DialogClose>

          <DialogClose>
            <button className='flex flex-col items-center gap-y-8'>
              <div className='w-[60px] h-[60px] rounded-full bg-primary-strong flex items-center justify-center'>
                <Icon name='link' className='w-[30px] h-[30px]' />
              </div>
              <span className='typo-label1 font-medium text-gray-7'>링크 복사</span>
            </button>
          </DialogClose>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
