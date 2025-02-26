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

const DeleteModal = ({ children }: StrictPropsWithChildren) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='w-[264px] px-20'>
        <DialogHeader />
        <DialogTitle className='typo-heading font-bold text-gray-7 text-center mb-10'>
          알림
        </DialogTitle>
        <DialogDescription className='typo-label2 font-regular text-gray-7 text-center'>
          내역을 삭제할까요?
          <br />
          삭제 후에는 복구할 수 없어요.
        </DialogDescription>
        <DialogFooter className='mt-[38px] flex flex-row gap-x-8 typo-label1 font-medium '>
          <DialogClose className='flex-1 rounded-sm bg-gray-2 text-gray-7 py-12'>취소</DialogClose>
          <DialogClose className='flex-1 rounded-sm bg-gray-7 text-white py-12'>확인</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
