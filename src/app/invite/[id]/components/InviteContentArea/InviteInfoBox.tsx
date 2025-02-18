import { StrictPropsWithChildren } from '@/types/common';

const InviteInfoBox = ({ children }: StrictPropsWithChildren) => {
  return (
    <div className='w-full p-20 bg-blur-white-60 border border-blur-white-30 rounded-md'>
      {children}
    </div>
  );
};

export default InviteInfoBox;
