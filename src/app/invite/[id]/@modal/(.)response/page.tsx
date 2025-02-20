'use client';

import React from 'react';

import { PageHeaderCloseButton } from '@/components/invite/PageHeaderButton';
import ResponseForm from '@/components/invite/ResponseForm';
import PageContainer from '@/components/layout/PageContainer';

const page = () => {
  return (
    <div className='min-h-dvh  absolute top-0 bottom-0 left-0 right-0 bg-white z-100'>
      <PageContainer.PageHeader title='응답하기' right={<PageHeaderCloseButton />} />
      <div className='min-h-dvh py-32 px-[18px]'>
        <ResponseForm />
      </div>
    </div>
  );
};

export default page;
