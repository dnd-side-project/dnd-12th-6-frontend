import { StrictPropsWithChildren } from '@/types/common';

const InputMain = ({ children }: StrictPropsWithChildren) => {
  return (
    <div className='w-full px-10 pb-12 flex items-center border-b border-input focus-within:border-primary-neon transition-colors'>
      {children}
    </div>
  );
};

export default InputMain;
