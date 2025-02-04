import { VariantProps } from 'class-variance-authority';
import { createContext, useContext } from 'react';

import { tabVariants } from '../ui/TabMain';

// 공유할 State -> Main뿐만 아니라, Icon, Label에서도 쓰이면 Context로 전달!
interface DefaultValueState extends VariantProps<typeof tabVariants> {
  count?: number;
}

export const TabContext = createContext<DefaultValueState | null>(null);

export const useTabState = () => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error('useTabState는 TabProvider 안에서만 사용 가능합니다.');
  }
  return context;
};
