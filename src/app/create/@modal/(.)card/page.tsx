'use client';

import { useEffect } from 'react';

import CardContainer from '@/components/card/CardContainer';
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
    <div className='bg-white z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-content h-dvh'>
      <PageContainer className=' overflow-y-scroll'>
        <PageContainer.PageHeader
          title={ROUTER_TITLE.EDIT_CARD}
          left={<PageHeaderCancelButton />}
          right={<PageHeaderCompleteButton />}
        />
        <CardContainer />
      </PageContainer>
    </div>
  );
};

export default page;
