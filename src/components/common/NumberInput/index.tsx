'use client';

import React, { ChangeEvent, useState } from 'react';

import Icon from '../Icon';
import InputRoot from '../Input';

interface Props {
  initValue?: number;
  min?: number;
  max?: number;
}

const NumberInput = React.forwardRef<HTMLInputElement, Props>(function NumberInput(
  { initValue = 1, min = 1, max = 20 },
  ref,
) {
  const [number, setNumber] = useState<number>(initValue);

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (!isNaN(value)) {
      setNumber(Math.min(Math.max(value, min), max));
    }
  };

  const handleIncrease = () => {
    setNumber((prev) => Math.min(prev + 1, max));
  };

  const handleDecrease = () => {
    setNumber((prev) => Math.max(prev - 1, min));
  };

  return (
    <InputRoot>
      <InputRoot.Input
        ref={ref}
        type='number'
        inputMode='numeric'
        value={number}
        onChange={handleChangeText}
      />
      <div className='flex gap-16'>
        <button className='w-28 h-28 flex items-center justify-center' onClick={handleDecrease}>
          <Icon name='minus' className='w-[18px] h-[18px] text-gray-6' />
        </button>
        <div className='w-[1.6px] bg-gray-2'></div>
        <button className='w-28 h-28 flex items-center justify-center' onClick={handleIncrease}>
          <Icon name='plus' className='w-[18px] h-[18px] text-gray-6' />
        </button>
      </div>
    </InputRoot>
  );
});

export default NumberInput;
