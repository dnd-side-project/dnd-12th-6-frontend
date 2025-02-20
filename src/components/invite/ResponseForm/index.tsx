'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '@/components/common/Button';
import Field from '@/components/common/Field';
import Icon from '@/components/common/Icon';
import InputRoot from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';

import ResponseBox, { ResponseType } from './ResponseBox';

interface InviteResponseForm {
  invitationId: number;
  state: ResponseType | string;
  name: string;
  password: string;
  message?: string;
}

const ResponseForm = () => {
  const { id } = useParams();

  const validateSchema = yup.object().shape({
    invitationId: yup.number().required(),
    name: yup.string().required('이름 또는 닉네임을 입력해주세요.'),
    password: yup
      .string()
      .min(4, '임시비밀번호는 4자로 입력해주세요.')
      .max(4, '임시비밀번호는 4자로 입력해주세요.')
      .required('임시비밀번호를 입력해주세요.'),
    state: yup.string().required('참석 여부를 선택해주세요.'),
    message: yup.string().max(50, '메세지는 50자 이내로 입력해주세요.'),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<InviteResponseForm>({
    defaultValues: {
      invitationId: Number(id),
      state: '',
    },
    resolver: yupResolver(validateSchema),
  });

  const handleClickType = (value: string) => {
    if (watch('state') === value) {
      setValue('state', '');
    } else {
      setValue('state', value);
    }
  };

  /**
   * TODO
   * 응답하기 API 연동
   */
  const submitResponse: SubmitHandler<InviteResponseForm> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitResponse)}>
      <div className='pb-[120px] flex flex-col gap-[44px]'>
        <Field>
          <Field.Label required>이름 또는 닉네임</Field.Label>
          <InputRoot>
            <InputRoot.Input placeholder='이름 또는 닉네임' {...register('name')} />
          </InputRoot>
          {errors.name && <Field.HelpText status={'error'}>{errors.name.message}</Field.HelpText>}
        </Field>
        <Field>
          <Field.Label required>임시 비밀번호</Field.Label>
          <InputRoot>
            <InputRoot.Input
              type='password'
              inputMode='numeric'
              placeholder='숫자 4자리'
              {...register('password')}
            />
          </InputRoot>
          <Field.HelpText>
            <Icon name='error' className='w-12 h-12' />
            응답 수정시 필요한 번호입니다.
          </Field.HelpText>
          {errors.password && (
            <Field.HelpText status={'error'}>{errors.password.message}</Field.HelpText>
          )}
        </Field>
        <Field>
          <Field.Label required>참석 여부</Field.Label>
          <ResponseBox value={watch('state')} onClick={handleClickType} />
          {errors.state && <Field.HelpText status={'error'}>{errors.state.message}</Field.HelpText>}
        </Field>
        <Field>
          <Field.Label optional>전달 메세지</Field.Label>
          <Textarea
            placeholder='남기고 싶은 메세지를 작성해주세요. 참여하는 모든 인원이 확인할 수 있어요.'
            counter
            maxlength={50}
            {...register('message')}
          />
          {errors.message && (
            <Field.HelpText status={'error'}>{errors.message.message}</Field.HelpText>
          )}
        </Field>
      </div>
      <div className='w-full max-w-content sticky bottom-32'>
        <Button
          variant='primaryStrong'
          className='h-[60px] w-full typo-heading font-semibold'
          type='submit'
        >
          완료
        </Button>
      </div>
    </form>
  );
};

export default ResponseForm;
