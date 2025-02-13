import React from 'react';

import Field from '@/components/common/Field';
import InputRoot from '@/components/common/Input';
import NumberInput from '@/components/common/NumberInput';
import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';

const page = () => {
  return (
    <PageContainer>
      <PageHeader backButton />
      <div className='cursor-pointer w-full relative h-[360px] bg-preview bg-cover'>
        <div className='w-[190px] absolute top-80 left-1/2 -translate-x-1/2 flex flex-col items-center gap-24'>
          <img className='w-[106px]' src='/images/create/letter_image.png' />
          <p className='typo-label1 text-primary-strong'>
            여기를 눌러 <b className='font-bold'>우리만의 초대장 꾸미기</b>
          </p>
        </div>
        <div className='w-[157px] h-[44px] absolute bottom-[-22px] left-1/2 -translate-x-1/2 flex items-center justify-center border border-primary-normal rounded-xl bg-primary-natural'>
          <p className='typo-body font-bold text-primary-strong'>꾸미기</p>
        </div>
      </div>

      <div className='py-40 px-[18px] flex flex-col gap-32'>
        <Field className='mb-[22px]'>
          <Field.Label required>주최자명</Field.Label>
          <InputRoot>
            <InputRoot.Input placeholder='이름 또는 닉네임' />
          </InputRoot>
        </Field>
        <Field className='mb-[22px]'>
          <Field.Label required>장소</Field.Label>
          <InputRoot>
            <InputRoot.Input placeholder='ex) 강남역 7번 출구, 아파트 101동 102호' />
          </InputRoot>
        </Field>
        <Field className='mb-[22px]'>
          <Field.Label required>일시</Field.Label>
          <InputRoot>
            <InputRoot.Input placeholder='ex) 강남역 7번 출구, 아파트 101동 102호' />
          </InputRoot>
        </Field>
      </div>

      <hr className='h-10 bg-gray-1 border-y border-gray-2' />

      <div className='py-40 px-[18px] flex flex-col gap-40'>
        <Field>
          <Field.Label optional>초대 인원</Field.Label>
          <NumberInput />
        </Field>
        <Field>
          <Field.Label optional>메세지</Field.Label>
          <InputRoot>
            <InputRoot.Input placeholder='ex) 강남역 7번 출구, 아파트 101동 102호' />
          </InputRoot>
        </Field>
      </div>
      <button
        className='w-full h-[57px] flex items-center justify-center bg-gray-7 disabled:bg-gray-3'
        disabled
      >
        <p className='typo-heading font-semibold text-white'>완료</p>
      </button>
    </PageContainer>
  );
};

export default page;
