import Link from 'next/link';

import Icon from '@/components/common/Icon';
import ROUTER_PATH from '@/constants/router';

const CreateInvitationButton = () => {
  return (
    <Link href={ROUTER_PATH.INVITATION.CREATE}>
      <button
        className='w-full h-160 flex flex-col justify-center items-center gap-y-8
     bg-primary-natural/60 border border-dashed border-primary-normal rounded-md'
      >
        <Icon name='invite' className='' />
        <div className='typo-label1 text-primary-strong'>
          <span className='font-bold'>우리만의 초대장</span>
          <span className='font-medium'> 만들기</span>
        </div>
      </button>
    </Link>
  );
};

export default CreateInvitationButton;
