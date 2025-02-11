import clsx from 'clsx';

import BottomNav from '@/components/layout/BottomNav';
import Header from '@/components/layout/Header';
import { BottomNavList } from '@/store/bottomNavStore';
import { StrictPropsWithChildren } from '@/types/common';

interface Props {
  header?: boolean;
  bottomNav?: boolean;
}

const PageContainer = ({ header, bottomNav, children }: StrictPropsWithChildren<Props>) => {
  return (
    <div
      className={clsx('w-full max-w-content relative', header && 'pt-[54px]', bottomNav && 'pb-64')}
    >
      {children}
      {header && <Header />}
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

export default PageContainer;
