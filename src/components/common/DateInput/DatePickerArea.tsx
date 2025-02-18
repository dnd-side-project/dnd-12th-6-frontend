'use client';

import { ko } from 'date-fns/locale';
import React from 'react';

import { formatDateNoTime } from '@/utils/format/formatDate';

import { SheetFooter } from '../BottomSheet';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import Field from '../Field';
import Icon from '../Icon';
import InputRoot from '../Input';

interface DatePickerAreaProps {
  date?: Date;
  onChangeDate: (e?: Date) => void;
  changeStep: () => void;
}

const DatePickerArea = ({ date, onChangeDate, changeStep }: DatePickerAreaProps) => {
  // date Time select 이동
  const handleNextStep = () => {
    if (!date) return;

    changeStep();
  };

  return (
    <>
      <div className='pt-32 px-20 pb-[50px]'>
        <Field>
          <Field.Label>날짜</Field.Label>
          <div className='cursor-pointer px-16 py-[14px] flex items-center border-[1.2px] border-gray-2 rounded-sm'>
            <InputRoot.Input
              placeholder='00년 00월 00일'
              value={date ? formatDateNoTime(date?.toUTCString()) : ''}
              readOnly
            />
            <Icon name='calendar' className='w-[21px] h-[21px] text-gray-5' />
          </div>
        </Field>
        <Calendar mode='single' locale={ko} selected={date} onSelect={onChangeDate} />
      </div>

      <SheetFooter className='px-20 pb-[22px]'>
        <Button
          variant='primaryStrong'
          className='h-[60px] w-full typo-heading font-semibold'
          disabled={!date}
          onClick={handleNextStep}
        >
          다음
        </Button>
      </SheetFooter>
    </>
  );
};

export default DatePickerArea;
