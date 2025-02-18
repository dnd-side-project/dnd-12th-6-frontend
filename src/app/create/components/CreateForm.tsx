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
  detail_address: string;
  date: string;
  max_attendances: number;
  description: string;
  title: string;
  invitationType: 'CREATOR';
  backgroundImageData?: string;

  invitationId?: number;
  creator_id?: number;
  created_at?: string;
  updated_at?: string;
  place?: string;
  state?: string;
  link?: string;
  fontName?: string;
  sticker?: string;
}

const CreateForm = () => {
  const formik = useFormik<SaveCreateFormDataType>({
    initialValues: {
      title: '',
      detail_address: '',
      date: '',
      max_attendances: 1,
      description: '',
      invitationType: 'CREATOR',
    },
    validationSchema: yup.object({
      title: yup.string().min(1).max(10).required('이름을 입력해주세요.'),
      detail_address: yup.string().required('장소명을 입력해주세요.'),
      date: yup.string().required('모임 임시를 선택해주세요.'),
      max_attendances: yup.number().min(1).max(20),
      description: yup.string().max(200),
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
              value={formik.values.detail_address}
              onChange={formik.handleChange}
            />
          </InputRoot>
          {formik.errors.detail_address && (
            <Field.HelpText status='error'>{formik.errors.detail_address}</Field.HelpText>
          )}
        </Field>
        <Field className='mb-[22px]'>
          <Field.Label required>일시</Field.Label>
          <DateInput
            value={formik.values.date}
            onChangeValue={(value: string) => formik.setFieldValue('date', value)}
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
            value={formik.values.max_attendances}
            onChangeValue={(value: number) => formik.setFieldValue('max_length', value)}
          />
        </Field>
        <Field>
          <Field.Label optional>메세지</Field.Label>
          <Textarea
            name='message'
            value={formik.values.description}
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
