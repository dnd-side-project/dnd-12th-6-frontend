import React, { HTMLAttributes, PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren, HTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const FieldLabel = ({ required = false, children, ...rest }: Props) => {
  return (
    <label className='mb-12 mx-4 typo-label1 font-semibold text-gray-6' {...rest}>
      {children}
      {required && <span className='ml-2 typo-caption1 text-primary-strong'>*</span>}
    </label>
  );
};

export default FieldLabel;
