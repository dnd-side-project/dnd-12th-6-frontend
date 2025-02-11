import { ReactNode } from 'react';

/**
 * PropsWithChildren을 대신하는 `children` 속성이 필수인 컴포넌트 Props 타입
 * @template P - 추가적인 Props 타입 (기본값: `unknown`)
 */
export type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};
