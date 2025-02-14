import { cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

import { useTabState } from '../modules/TabContext';

const TabText = ({ children }: PropsWithChildren) => {
  const { active } = useTabState();

  return <p className={cn(textVariants({ active }))}>{children}</p>;
};

export default TabText;

const textVariants = cva(['typo-label1 font-semibold text-gray-4 whitespace-nowrap'], {
  variants: {
    active: {
      true: 'text-gray-2',
    },
  },
});
