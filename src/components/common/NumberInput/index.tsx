'use client';

import React, { ChangeEvent, useState } from 'react';

import Icon from '../Icon';
import InputRoot from '../Input';

interface Props {
  value?: number;
  min?: number;
  max?: number;
  onChangeValue: (value: number) => void;
}

const NumberInput = React.forwardRef<HTMLInputElement, Props>(function NumberInput(
  { value = 1, min = 1, max = 20, onChangeValue, ...rest },
  ref,
) {
  const [number, setNumber] = useState<number>(value);

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (!isNaN(value)) {
      const formatValue = Math.min(Math.max(value, min), max);

      if (onChangeValue) {
        onChangeValue(formatValue);
      }
      setNumber(formatValue);
    }
  };

  const handleIncrease = () => {
    if (onChangeValue) {
      onChangeValue(number + 1);
    }
    setNumber((prev) => Math.min(prev + 1, max));
  };

  const handleDecrease = () => {
    if (onChangeValue) {
      onChangeValue(number - 1);
    }
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
        {...rest}
      />
      <div className='pt-4 flex gap-16'>
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
