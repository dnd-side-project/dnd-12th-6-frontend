import React from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { ROUTER_TITLE } from '@/constants/enum';

import ContentArea from './components/ContentArea';
import { PageHeaderCloseButton } from './components/PageHeaderButton';

const page = () => {
  return (
    <PageContainer>
      <PageContainer.PageHeader title={ROUTER_TITLE.CREATE} right={<PageHeaderCloseButton />} />
      <ContentArea />
    </PageContainer>
  );
};

export default page;
