import React from 'react';

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../BottomSheet';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import Field from '../Field';
import Icon from '../Icon';
import InputRoot from '../Input';

interface Props {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInput = ({ ...rest }: Props) => {
  const side = 'bottom';

  return (
    <Sheet key={side}>
      <SheetTrigger asChild>
        <div className='cursor-pointer px-16 py-[14px] flex items-center  border-[1.2px] border-gray-2 rounded-sm'>
          <InputRoot.Input {...rest} readOnly />{' '}
          <Icon name='calendar' className='w-[21px] h-[21px] text-gray-5' />
        </div>
      </SheetTrigger>
      {/* 바텀시트 영역 */}
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>일시 선택하기</SheetTitle>
        </SheetHeader>
        <hr className='w-full h-2 bg-primary-strong' />

        <div className='w-full'>
          <div className='pt-32 px-20 pb-[50px]'>
            <Field>
              <Field.Label>날짜</Field.Label>
              <div className='cursor-pointer px-16 py-[14px] flex items-center  border-[1.2px] border-gray-2 rounded-sm'>
                <InputRoot.Input {...rest} readOnly />{' '}
                <Icon name='calendar' className='w-[21px] h-[21px] text-gray-5' />
              </div>
            </Field>
          </div>

          <Calendar mode='single' />
        </div>

        <SheetFooter className='px-20 pb-[22px]'>
          <Button variant='primaryStrong' className='h-[60px] w-full typo-heading font-semibold'>
            다음
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default DateInput;
