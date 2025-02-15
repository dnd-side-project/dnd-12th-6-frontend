'use client';

import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

import DateInput from '@/components/common/DateInput';
import Field from '@/components/common/Field';
import InputRoot from '@/components/common/Input';
import NumberInput from '@/components/common/NumberInput';
import Textarea from '@/components/common/Textarea';

interface SaveCreateFormDataType {
  title: string;
  address_detail: string;
  date: string;
  max_length: number;
  message?: string;
}

const CreateForm = () => {
  const formik = useFormik<SaveCreateFormDataType>({
    initialValues: {
      title: '',
      address_detail: '',
      date: '',
      max_length: 1,
      message: '',
    },
    validationSchema: yup.object({
      title: yup.string().min(1).max(10).required('이름을 입력해주세요.'),
      address_detail: yup.string().required('장소명을 입력해주세요.'),
      date: yup.string().required('모임 임시를 선택해주세요.'),
      max_length: yup.number().min(1).max(20),
      message: yup.string().max(200),
    }),
    onSubmit: (values) => {
      saveInvite(values);
    },
  });

  const saveInvite = async (values: SaveCreateFormDataType) => {
    console.log(values);
  };

  return (
    <>
      <div className='py-40 px-[18px] flex flex-col gap-32'>
        <Field className='mb-[22px]'>
          <Field.Label required>주최자명</Field.Label>
          <InputRoot>
            <InputRoot.Input
              name='title'
              placeholder='이름 또는 닉네임'
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </InputRoot>
          {formik.errors.title && (
            <Field.HelpText status='error'>{formik.errors.title}</Field.HelpText>
          )}
        </Field>
        <Field className='mb-[22px]'>
          <Field.Label required>장소</Field.Label>
          <InputRoot>
            <InputRoot.Input
              name='address_detail'
              placeholder='ex) 강남역 7번 출구, 아파트 101동 102호'
              value={formik.values.address_detail}
              onChange={formik.handleChange}
            />
          </InputRoot>
          {formik.errors.address_detail && (
            <Field.HelpText status='error'>{formik.errors.address_detail}</Field.HelpText>
          )}
        </Field>
        <Field className='mb-[22px]'>
          <Field.Label required>일시</Field.Label>
          <DateInput
            placeholder='모임 일시'
            value={formik.values.date}
            onChange={formik.handleChange}
          />
          {formik.errors.date && (
            <Field.HelpText status='error'>{formik.errors.date}</Field.HelpText>
          )}
        </Field>
      </div>

      <hr className='h-10 bg-gray-1 border-y border-gray-2' />

      <div className='py-40 px-[18px] flex flex-col gap-40'>
        <Field>
          <Field.Label optional>초대 인원</Field.Label>
          <NumberInput
            value={formik.values.max_length}
            onChangeValue={(value: number) => formik.setFieldValue('max_length', value)}
          />
        </Field>
        <Field>
          <Field.Label optional>메세지</Field.Label>
          <Textarea
            name='message'
            value={formik.values.message}
            onChange={formik.handleChange}
            placeholder='전달할 메세지를 입력해주세요.'
            counter
          />
        </Field>
      </div>

      <button
        className='sticky bottom-0 w-full h-[57px] flex items-center justify-center bg-gray-7 disabled:bg-gray-3'
        type='submit'
        onClick={() => formik.handleSubmit()}
      >
        <p className='typo-heading font-semibold text-white'>완료</p>
      </button>
    </>
  );
};

export default CreateForm;
