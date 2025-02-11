import { cva } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

const FieldMain = ({ children }: PropsWithChildren) => {
  return <div className={cn(fieldVariants())}>{children}</div>;
};

export default FieldMain;

const fieldVariants = cva(['flex flex-col']);
