import { cva } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

export interface Props extends PropsWithChildren {
  status?: 'help' | 'error';
}

const FieldHelpText = ({ status = 'help, ', children }: Props) => {
  return <p className={cn(helpTextVariants({ status }))}>{children}</p>;
};

export default FieldHelpText;

const helpTextVariants = cva([''], {
  variants: {
    status: {
      help: '',
      error: 'text-[#FF4F4F]',
    },
  },
});
