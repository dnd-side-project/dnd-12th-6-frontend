import { cva } from 'class-variance-authority';
import React, { HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

export interface Props extends PropsWithChildren, HTMLAttributes<HTMLLabelElement> {}

const FieldLabel = ({ children, ...rest }: Props) => {
  return (
    <label className={cn(labelVariants())} {...rest}>
      {children}
    </label>
  );
};

export default FieldLabel;

const labelVariants = cva(' mb-12 typo-label1 text-gray-6');
