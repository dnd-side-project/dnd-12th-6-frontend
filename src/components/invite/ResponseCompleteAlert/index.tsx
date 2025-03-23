'use client';

import Image from 'next/image';
import CardImage from 'public/images/response/card.png';

import { Drawer, DrawerContent } from '@/components/common/Drawer/drawer';
import Icon from '@/components/common/Icon';

type CompleteType = 'response' | 'edit' | null;

interface ResponseCompleteAlertProps {
  completeType: CompleteType;
  open: boolean;
  onClose: () => void;
}
const ResponseCompleteAlert = ({ completeType, open, onClose }: ResponseCompleteAlertProps) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerContent className='bg-transparent left-[18px] right-[18px] bottom-32'>
        <div className='pb-32 flex flex-col items-center justify-center text-center bg-white rounded-[25px]'>
          <div className='mt-12 mx-auto w-64 h-[6px] bg-gray-2 rounded-sm mb-32' />
          <Image src={CardImage} alt='card' width={108} height={108} />
          <div className='mt-[22px] mb-[11px] typo-body font-bold text-primary-strong'>
            응답 {completeType === 'response' ? '전달' : '수정'}이 완료되었습니다!
          </div>
          <div className='flex flex-col items-center gap-y-2 typo-label1 font-medium text-gray-6'>
            <div className='flex items-center'>
              이후에도 <Icon name='mailbox' className='w-[15px] h-[15px] ml-[3px] mr-[2px]' />
              <span className='font-semibold text-gray-7'>응답 현황</span>에서
            </div>
            <div>
              <span className='font-semibold text-gray-7'>참석 여부와 메시지를 수정</span>할 수
              있어요.
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ResponseCompleteAlert;
