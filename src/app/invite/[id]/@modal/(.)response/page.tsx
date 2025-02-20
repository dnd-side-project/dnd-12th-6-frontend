'use client';

import React, { useEffect } from 'react';

import { PageHeaderCloseButton } from '@/components/invite/PageHeaderButton';
import ResponseForm from '@/components/invite/ResponseForm';
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
    <div className='absolute top-0 bottom-0 left-0 right-0 bg-white z-50 overflow-y-scroll'>
      <PageContainer.PageHeader
        title={ROUTER_TITLE.INVITE_RESPONSE}
        right={<PageHeaderCloseButton />}
      />
      <div className='min-h-dvh py-32 px-[18px]'>
        <ResponseForm />
      </div>
    </div>
  );
};

export default page;
