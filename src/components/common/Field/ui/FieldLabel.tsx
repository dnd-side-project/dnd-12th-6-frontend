import React, { HTMLAttributes, PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren, HTMLAttributes<HTMLLabelElement> {}

const FieldLabel = ({ children, ...rest }: Props) => {
  return (
    <label className='mb-12 typo-label1 font-medium text-gray-6' {...rest}>
      {children}
    </label>
  );
};

export default FieldLabel;
