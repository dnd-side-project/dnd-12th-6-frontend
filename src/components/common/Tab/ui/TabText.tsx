import { cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

import { useTabState } from '../modules/TabContext';

const TabText = ({ children }: PropsWithChildren) => {
  const { active } = useTabState();

  return <p className={cn(textVariants({ active }))}>{children}</p>;
};

export default TabText;

const textVariants = cva(['text-label1 text-gray-4'], {
  variants: {
    active: {
      true: 'text-gray-2',
    },
  },
});
