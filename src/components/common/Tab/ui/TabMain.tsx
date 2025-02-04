import { cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

import { TabContext } from '../modules/TabContext';

export interface Props extends PropsWithChildren {
  value?: string;
  count?: number;
  active?: boolean;
}

const TabMain = ({ count = 0, active = false, children }: Props) => {
  return (
    <TabContext.Provider value={{ count, active }}>
      <div className={cn(tabVariants())}>{children}</div>
    </TabContext.Provider>
  );
};

export default TabMain;

export const tabVariants = cva(
  ['cursor-pointer w-fit h-40 px-16 flex items-center gap-4 border border-gray-2 rounded-round'],
  {
    variants: {
      active: {
        true: 'bg-gray-7',
      },
    },
  },
);
