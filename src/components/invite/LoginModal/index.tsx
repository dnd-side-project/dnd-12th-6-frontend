import Link from 'next/link';
import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/common/Dialog/dialog';
import { StrictPropsWithChildren } from '@/types/common';

const LoginModal = ({ children }: StrictPropsWithChildren) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-[345px]'>
        <DialogHeader />
        <div className='mt-10 mb-40'>
          <DialogTitle className='typo-heading font-semibold'>
            가입된 계정이 있으신가요?
            <br />
            로그인시 기록을 저장할 수 있어요!
          </DialogTitle>
          <DialogDescription className='mt-8 text-gray-6 typo-label1'>
            비회원으로도 응답 수정이 가능해요.
          </DialogDescription>
        </div>
        <DialogFooter className='mb-24'>
          <div className='flex-1 flex flex-col items-center gap-12'>
            <Link
              href={`/invite/1/response`}
              className='w-full h-[56px] flex items-center justify-center typo-body font-semibold border border-gray-2 rounded-sm bg-gray-1'
            >
              비회원으로 초대 응답하기
            </Link>
            <span className='text-gray-6 typo-label2'>또는</span>
            <button className='w-full h-[56px] typo-body font-semibold rounded-sm bg-[#FEE500]'>
              카카오로 간편 로그인
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
