import * as yup from 'yup';

export const nonmemberResponseSchema = yup.object().shape({
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

export const memberResponseSchema = yup.object().shape({
  invitationId: yup.number().required(),
  name: yup.string().required('이름 또는 닉네임을 입력해주세요.'),
  state: yup.string().required('참석 여부를 선택해주세요.'),
  message: yup.string().max(50, '메세지는 50자 이내로 입력해주세요.'),
});

export type nonmemberPayload = yup.InferType<typeof nonmemberResponseSchema>;
export type memberPayload = yup.InferType<typeof memberResponseSchema>;
