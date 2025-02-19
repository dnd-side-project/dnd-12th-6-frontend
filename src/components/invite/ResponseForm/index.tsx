'use client';

import { useState } from 'react';

import { Button } from '@/components/common/Button';
import Field from '@/components/common/Field';
import InputRoot from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';

import ResponseBox, { ResponseType } from './ResponseBox';

const ResponseForm = () => {
  const [response, setResponse] = useState<ResponseType | string>('');

  const handleClickType = (value: string) => {
    if (response === value) {
      setResponse('');
    } else {
      setResponse(value);
    }
  };

  return (
    <>
      <div className='pb-[120px] flex flex-col gap-[44px]'>
        <Field>
          <Field.Label required>이름 또는 닉네임</Field.Label>
          <InputRoot>
            <InputRoot.Input placeholder='이름 또는 닉네임' />
          </InputRoot>
        </Field>
        <Field>
          <Field.Label required>임시 비밀번호</Field.Label>
          <InputRoot>
            <InputRoot.Input placeholder='숫자 4자리' />
          </InputRoot>
        </Field>
        <Field>
          <Field.Label required>참석 여부</Field.Label>
          <ResponseBox value={response} onClick={handleClickType} />
        </Field>
        <Field>
          <Field.Label optional>전달 메세지</Field.Label>
          <Textarea
            placeholder='남기고 싶은 메세지를 작성해주세요. 참여하는 모든 인원이 확인할 수 있어요.'
            counter
            max={50}
          />
        </Field>
      </div>
      <div className='w-full max-w-content px-[18px] fixed left-0 bottom-32'>
        <Button variant='primaryStrong' className='h-[60px] w-full typo-heading font-semibold'>
          완료
        </Button>
      </div>
    </>
  );
};

export default ResponseForm;
