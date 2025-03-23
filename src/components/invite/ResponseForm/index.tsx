'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useParams, useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/common/Button';
import Field from '@/components/common/Field';
import Icon from '@/components/common/Icon';
import InputRoot from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';
import {
  memberPayload,
  nonmemberPayload,
  memberResponseSchema,
  nonmemberResponseSchema,
} from '@/utils/schema/responseSchema';

import ResponseBox from './ResponseBox';

interface ResponseFormProps {
  type: 'member' | 'nonmember';
}

const ResponseForm = ({ type }: ResponseFormProps) => {
  const { id } = useParams();
  const router = useRouter();

  const schema = type === 'member' ? memberResponseSchema : nonmemberResponseSchema;
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<memberPayload | nonmemberPayload>({
    mode: 'all',
    defaultValues: {
      invitationId: Number(id),
      state: '',
    },
    resolver: yupResolver(schema),
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
  const submitResponse: SubmitHandler<memberPayload | nonmemberPayload> = (data) => {
    console.log(data);
    router.push(`/invite/${id}?complete=response`);
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
        {type === 'nonmember' && (
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
            {'password' in errors && errors.password && (
              <Field.HelpText status={'error'}>{errors.password.message}</Field.HelpText>
            )}
          </Field>
        )}
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
          disabled={!isDirty || !isValid}
          variant={!isDirty || !isValid ? 'disabled' : 'primaryStrong'}
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
