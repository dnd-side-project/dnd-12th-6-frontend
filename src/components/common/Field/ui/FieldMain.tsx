import clsx from 'clsx';
import React from 'react';

import { StrictPropsWithChildren } from '@/types/common';

export interface Props extends StrictPropsWithChildren {
  className?: string;
}

const FieldMain = ({ className, children }: Props) => {
  return <div className={clsx('flex flex-col', className)}>{children}</div>;
};

export default FieldMain;
