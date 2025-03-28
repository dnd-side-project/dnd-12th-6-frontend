import clsx from 'clsx';

import BottomNav from '@/components/layout/BottomNav';
import Header from '@/components/layout/Header';
import { BottomNavList } from '@/store/bottomNavStore';
import { StrictPropsWithChildren } from '@/types/common';

import PageHeader from './lib/PageHeader';

interface Props {
  header?: boolean;
  bottomNav?: boolean;
  className?: string;
  transparent?: boolean;
}

const PageContainer = ({
  header,
  bottomNav,
  className,
  transparent,
  children,
}: StrictPropsWithChildren<Props>) => {
  return (
    <div
      className={clsx(
        'w-full max-w-content relative',
        header && !transparent && 'pt-[54px]',
        bottomNav && 'pb-[88px]',
        className,
      )}
    >
      {header && <Header transparent={transparent} />}
      {children}
      {bottomNav && (
        <BottomNav>
          <BottomNav.Item label='메인' tab={BottomNavList.MAIN} icon='home' />
          <BottomNav.Item label='초대장 만들기' tab={BottomNavList.CREATE} icon='message' />
          <BottomNav.Item label='초대장 목록' tab={BottomNavList.LIST} icon='mailbox' />
          <BottomNav.Item label='설정' tab={BottomNavList.SETTING} icon='setting' />
        </BottomNav>
      )}
    </div>
  );
};

PageContainer.PageHeader = PageHeader; // 정적 속성으로 추가

export default PageContainer;
