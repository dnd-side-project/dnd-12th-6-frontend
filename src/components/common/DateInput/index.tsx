import React from 'react';

import Icon from '../Icon';
import InputRoot from '../Input';

interface Props {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInput = ({ ...rest }: Props) => {
  return (
    <div className='px-16 py-[14px] flex items-center  border-[1.2px] border-gray-2 rounded-sm'>
      <InputRoot.Input {...rest} readOnly />{' '}
      <Icon name='calendar' className='w-[21px] h-[21px] text-gray-5' />
    </div>
  );
};

export default DateInput;
