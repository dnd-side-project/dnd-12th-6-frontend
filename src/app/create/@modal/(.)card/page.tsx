'use client';

import { useEffect } from 'react';

import {
  PageHeaderCancelButton,
  PageHeaderCompleteButton,
} from '@/components/card/PageHeaderButton';
import PageContainer from '@/components/layout/PageContainer';
import { ROUTER_TITLE } from '@/constants/enum';

const page = () => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className='bg-white z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-content h-dvh border border-red-500'>
      <PageContainer>
        <PageContainer.PageHeader
          title={ROUTER_TITLE.EDIT_CARD}
          left={<PageHeaderCancelButton />}
          right={<PageHeaderCompleteButton />}
        />
        <div>초대장 꾸미기 모달</div>
      </PageContainer>
    </div>
  );
};

export default page;
