import React, { HTMLAttributes, PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren, HTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  optional?: boolean;
}

const FieldLabel = ({ required, optional, children, ...rest }: Props) => {
  return (
    <label className='mb-12 mx-4 flex items-center typo-label1 font-semibold text-gray-6' {...rest}>
      {children}
      {required && <span className='ml-2 typo-caption1 text-primary-strong'>*</span>}
      {optional && <span className='ml-2 typo-caption1 text-gray-4'>(선택)</span>}
    </label>
  );
};

export default FieldLabel;
