import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { useTabState } from '../modules/TabContext';

const TabCount = () => {
  const { count, active } = useTabState();

  return <span className={cn(countVariants({ active }))}>{count}</span>;
};

export default TabCount;

const countVariants = cva(['min-w-[19px] px-6 py-1 text-caption2 bg-gray-2 rounded-round'], {
  variants: {
    active: {
      true: 'bg-gray-1',
    },
  },
});
