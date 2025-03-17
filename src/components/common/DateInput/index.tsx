'use client';

import React, { useState } from 'react';

import { formatDateFull, formatDateToYYYYMMDD } from '@/utils/format/formatDate';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../BottomSheet';
import Icon from '../Icon';
import InputRoot from '../Input';
import DatePickerArea from './DatePickerArea';
import DateTimeArea from './DateTimeArea';

export const DATE_STEP = {
  DATE: 1,
  DATE_TIME: 2,
};

interface Props {
  value: string;
  onChangeValue: (value: string) => void;
}

const DateInput = ({ value, onChangeValue }: Props) => {
  const side = 'bottom';

  const [step, setStep] = useState<number>(DATE_STEP.DATE);
  const [date, setDate] = useState<Date | undefined>();
  const [dateTime, setDateTime] = useState<string>('');

  function formatTime(input: string) {
    if (!/^\d{4}$/.test(input)) return input; // 4자리 숫자인지 확인
    return input.replace(/(\d{2})(\d{2})/, '$1:$2');
  }

  const handleChangeDateTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = formatTime(e.target.value);

    setDateTime(value);
  };

  const handleOnSuccess = () => {
    if (!date) return;

    const formatDate = formatDateToYYYYMMDD(date?.toString());

    onChangeValue(`${formatDate}T${dateTime}:00`);
  };

  const dateReset = (isOpen: boolean) => {
    if (!isOpen) {
      setStep(DATE_STEP.DATE);
    }
  };

  return (
    <Sheet key={side} onOpenChange={dateReset}>
      <SheetTrigger asChild>
        <div className='cursor-pointer px-16 py-[14px] flex items-center  border-[1.2px] border-gray-2 rounded-sm'>
          <InputRoot.Input placeholder='모임 일시' value={formatDateFull(value)} readOnly />
          <Icon name='calendar' className='w-[21px] h-[21px] text-gray-5' />
        </div>
      </SheetTrigger>
      {/* 바텀시트 영역 */}
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>일시 선택하기</SheetTitle>
        </SheetHeader>
        <hr className='w-full h-2 bg-primary-strong' />

        {step === DATE_STEP.DATE && (
          <DatePickerArea
            date={date}
            onChangeDate={setDate}
            changeStep={() => setStep(DATE_STEP.DATE_TIME)}
          />
        )}
        {step === DATE_STEP.DATE_TIME && (
          <DateTimeArea
            dateTime={dateTime}
            onChange={handleChangeDateTime}
            onSuccess={handleOnSuccess}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};

export default DateInput;
