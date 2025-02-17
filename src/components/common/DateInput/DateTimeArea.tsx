'use client';

import { useEffect, useState } from 'react';

import { SheetClose, SheetFooter } from '../BottomSheet';
import { Button } from '../Button';
import Field from '../Field';
import Icon from '../Icon';
import InputRoot from '../Input';

interface DateTimeAreaProps {
  dateTime: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSuccess: () => void;
}

const DateTimeArea = ({ dateTime, onChange, onSuccess }: DateTimeAreaProps) => {
  const [isSubmit, setSubmit] = useState<boolean>(false);

  useEffect(() => {
    if (!dateTime) return;

    const check = dateTime.match(RegExp(/(\d{2}):(\d{2})/));

    if (check && dateTime.length === 5) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [dateTime]);

  return (
    <>
      <div className='pt-32 px-20 pb-[50px]'>
        <Field>
          <Field.Label>시간</Field.Label>
          <div className='cursor-pointer px-16 py-[14px] flex items-center border-[1.2px] border-gray-2 rounded-sm'>
            <InputRoot.Input placeholder='00:00' value={dateTime} onChange={onChange} />
            <Icon name='time' className='w-[19px] h-[19px] text-gray-5' />
          </div>
        </Field>
      </div>

      <SheetFooter className='px-20 pb-[22px]'>
        <SheetClose className='w-full' disabled={!isSubmit}>
          <Button
            variant='primaryStrong'
            className='h-[60px] w-full typo-heading font-semibold'
            disabled={!isSubmit}
            onClick={onSuccess}
          >
            완료
          </Button>
        </SheetClose>
      </SheetFooter>
    </>
  );
};

export default DateTimeArea;
