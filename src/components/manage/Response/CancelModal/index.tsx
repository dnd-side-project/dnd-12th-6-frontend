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

const CancelModal = ({ children }: StrictPropsWithChildren) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='w-fit px-40'>
        <DialogHeader />
        <DialogTitle className='typo-heading font-bold text-gray-7 text-center mb-10'>
          알림
        </DialogTitle>
        <DialogDescription className='typo-label2 font-regular text-gray-7 text-center'>
          모임을 취소할까요?
          <br />
          취소 후에는 복구할 수 없어요.
        </DialogDescription>
        <DialogFooter className='mt-[38px] flex gap-x-8 typo-label1 font-medium'>
          <DialogClose className='flex-1 rounded-sm bg-gray-2 text-gray-7 px-[44px] py-12'>
            취소
          </DialogClose>
          <DialogClose className='flex-1 rounded-sm bg-gray-7 text-white px-[44px] py-12'>
            확인
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CancelModal;
