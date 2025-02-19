import clsx from 'clsx';
import { useEffect } from 'react';

interface AlertToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}
const AlertToast = ({ message, isVisible, onClose }: AlertToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div
      className={clsx(
        'z-[100] fixed w-full top-80 flex justify-center',
        isVisible ? 'animate-slideDown opacity-100' : 'opacity-0 pointer-events-none',
      )}
    >
      <div className='w-fit bg-[#FFF9F9] border border-[#F75D5B] rounded-[40px] px-[14px] py-4 typo-label1 font-medium text-[#F75D5B]'>
        {message}
      </div>
    </div>
  );
};

export default AlertToast;
