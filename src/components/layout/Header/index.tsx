import LogoImage from 'public/logo.svg';

import Icon from '@/components/common/Icon';
import { cn } from '@/lib/utils';

interface HeaderProps {
  transparent?: boolean;
}

const Header = ({ transparent = false }: HeaderProps) => {
  return (
    <div
      className={cn([
        'fixed top-0 w-full max-w-content h-[54px] px-[22px] flex items-center justify-between py-10 bg-white text-primary-neon typo-title z-50',
        transparent && 'bg-transparent',
      ])}
    >
      <LogoImage height={34} />
      {transparent && (
        <button className='text-gray-7'>
          <Icon name='close' className='w-24 h-24' />
        </button>
      )}
    </div>
  );
};

export default Header;
