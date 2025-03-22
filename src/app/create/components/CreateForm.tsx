'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { Resolver, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import DateInput from '@/components/common/DateInput';
import Field from '@/components/common/Field';
import Icon from '@/components/common/Icon';
import InputRoot from '@/components/common/Input';
import NumberInput from '@/components/common/NumberInput';
import Textarea from '@/components/common/Textarea';
import { useToast } from '@/hooks/useToast';
import useCreateInvitationQuery, {
  SaveInvitationDataType,
} from '@/lib/invitation/hooks/useCreateInvitaionQuery';
import { useAuthStore } from '@/store/authStore';
import { useInvitationStore } from '@/store/invitationStore';

const CreateForm = () => {
  const router = useRouter();

  const { mutateAsync: mutateCreateInvitation } = useCreateInvitationQuery();

  const { toast } = useToast();
  const { user } = useAuthStore();
  const { invitation } = useInvitationStore();

  const validateSchema = yup.object().shape({
    creatorId: yup.number().required('사용자 아이디는 필수입니다'),
    organizerName: yup
      .string()
      .max(10, '10자 이내로 입력해주세요.')
      .required('이름을 입력해주세요.'),
    detailAddress: yup.string().required('장소명을 입력해주세요.'),
    date: yup.string().required('모임 임시를 선택해주세요.'),
    maxAttendances: yup
      .number()
      .min(1, '1명 이상 입력해주세요.')
      .max(20, '최대 20명 이내로 입력해주세요.')
      .optional(),
    description: yup.string().max(200, '200자 이내로 입력해주세요.').optional(),
    invitationType: yup.string().oneOf(['CREATOR']),
    // 초대장 꾸미기
    title: yup.string().required('초대장 타이틀을 입력해주세요.'),
  });

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<SaveInvitationDataType>({
    mode: 'onBlur',
    defaultValues: {
      title: '',
      detailAddress: '',
      date: '',
      maxAttendances: 1,
      invitationType: 'CREATOR',
    },
    resolver: yupResolver(validateSchema) as Resolver<SaveInvitationDataType>,
  });

  const submitInvite: SubmitHandler<SaveInvitationDataType> = async (values) => {
    const res = await mutateCreateInvitation(values);

    if (res.result === 'success') {
      const subKey = res.data[0].inviteKey;

      router.replace(`/create/success/${subKey}`);
    }
  };

  const onError: SubmitErrorHandler<SaveInvitationDataType> = async (values) => {
    if (values.title) {
      toast({
        description: (
          <>
            <Icon name='error' className='w-[13px] h-[13px]' />
            초대장 꾸미기를 완료해야해요.
          </>
        ),
      });
    }

    toast({
      description: (
        <>
          <Icon name='error' className='w-[13px] h-[13px]' />
          작성하지 않은 입력 칸이 있어요.
        </>
      ),
    });
  };

  useEffect(() => {
    setValue('title', invitation.title);
    setValue('themeName', invitation.theme);
    setValue('fontName', invitation.fontName);
    setValue('sticker', invitation.sticker);
    setValue('basicBackgroundType', invitation.background);
    setValue('backgroundImageData', invitation.backgroundImageData ?? undefined);
  }, [invitation, setValue]);

  useEffect(() => {
    if (user) {
      setValue('creatorId', user.userId);
    }
  }, [user, setValue]);

  return (
    <form onSubmit={handleSubmit(submitInvite, onError)}>
      <div className='py-40 px-[18px] flex flex-col gap-32'>
        <Field className='mb-[22px]'>
          <Field.Label required>주최자명</Field.Label>
          <InputRoot>
            <InputRoot.Input placeholder='이름 또는 닉네임' {...register('organizerName')} />
          </InputRoot>
          {errors.organizerName && (
            <Field.HelpText status='error'>{errors.organizerName.message}</Field.HelpText>
          )}
        </Field>
        <Field className='mb-[22px]'>
          <Field.Label required>장소</Field.Label>
          <InputRoot>
            <InputRoot.Input
              placeholder='ex) 강남역 7번 출구, 아파트 101동 102호'
              {...register('detailAddress')}
            />
          </InputRoot>
          {errors.detailAddress && (
            <Field.HelpText status='error'>{errors.detailAddress.message}</Field.HelpText>
          )}
        </Field>
        <Field className='mb-[22px]'>
          <Field.Label required>일시</Field.Label>
          <DateInput
            value={watch('date')}
            onChangeValue={(value: string) => setValue('date', value)}
          />
          {errors.date && <Field.HelpText status='error'>{errors.date.message}</Field.HelpText>}
        </Field>
      </div>

      <hr className='h-10 bg-gray-1 border-y border-gray-2' />

      <div className='py-40 px-[18px] flex flex-col gap-40'>
        <Field>
          <Field.Label optional>초대 인원</Field.Label>
          <NumberInput {...register('maxAttendances')} />
          {errors.maxAttendances && (
            <Field.HelpText status='error'>{errors.maxAttendances.message}</Field.HelpText>
          )}
        </Field>
        <Field>
          <Field.Label optional>메세지</Field.Label>
          <Textarea
            placeholder='전달할 메세지를 입력해주세요.'
            counter
            {...register('description')}
          />
          {errors.description && (
            <Field.HelpText status='error'>{errors.description.message}</Field.HelpText>
          )}
        </Field>
      </div>

      <button
        className='sticky bottom-0 w-full h-[57px] flex items-center justify-center bg-gray-7 disabled:bg-gray-3'
        type='submit'
      >
        <p className='typo-heading font-semibold text-white'>완료</p>
      </button>
    </form>
  );
};

export default CreateForm;
