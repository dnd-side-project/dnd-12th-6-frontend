import { StrictPropsWithChildren } from '@/types/common';

const InputMain = ({ children }: StrictPropsWithChildren) => {
  return (
    <div className='px-10 pb-12 border-b border-input focus-within:border-primary-neon transition-colors'>
      {children}
    </div>
  );
};

export default InputMain;
