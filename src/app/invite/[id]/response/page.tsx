import React from 'react';

import { PageHeaderCloseButton } from '@/components/invite/PageHeaderButton';
import ResponseForm from '@/components/invite/ResponseForm';
import PageContainer from '@/components/layout/PageContainer';

const page = () => {
  return (
    <PageContainer>
      <PageContainer.PageHeader title='응답하기' right={<PageHeaderCloseButton />} />
      <div className='min-h-dvh py-32 px-[18px]'>
        <ResponseForm />
      </div>
    </PageContainer>
  );
};

export default page;
