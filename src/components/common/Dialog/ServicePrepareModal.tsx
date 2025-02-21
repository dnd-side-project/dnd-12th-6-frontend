'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/common/Dialog/dialog';
import { StrictPropsWithChildren } from '@/types/common';

const ServicePrepareModal = ({ children }: StrictPropsWithChildren) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='w-full px-20 max-w-[264px]'>
        <DialogHeader />
        <DialogTitle className='typo-heading font-bold text-gray-7 text-center mb-10'>
          알림
        </DialogTitle>
        <DialogDescription className='typo-label2 font-regular text-gray-7 text-center'>
          기능 준비중입니다.
          <br />
          불편을 드려 죄송합니다.
        </DialogDescription>
        <DialogFooter className='mt-[38px] flex flex-row gap-x-8 typo-label1 font-medium'>
          <DialogClose className='flex-1 rounded-sm bg-primary-strong text-white px-[44px] py-12 text-nowrap'>
            확인
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ServicePrepareModal;
