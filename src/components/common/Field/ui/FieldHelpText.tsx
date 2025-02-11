import { cva, VariantProps } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

import Icon from '../../Icon';

export interface Props extends VariantProps<typeof helpTextVariants>, PropsWithChildren {}

const FieldHelpText = ({ status = 'default', children }: Props) => {
  return (
    <p className={cn(helpTextVariants({ status }))}>
      {status === 'error' && <Icon name='error' className='w-12 h-12' />}
      {children}
    </p>
  );
};

export default FieldHelpText;

const helpTextVariants = cva(['mx-10 mt-10 flex items-center gap-4 typo-caption1 font-medium'], {
  variants: {
    status: {
      default: '',
      error: 'text-[#FF4F4F]',
    },
  },
});
