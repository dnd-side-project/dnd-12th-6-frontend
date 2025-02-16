import React from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { ROUTER_TITLE } from '@/constants/enum';

const page = () => {
  return (
    <PageContainer>
      <PageContainer.PageHeader backButton title={ROUTER_TITLE.EDIT_CARD} />
    </PageContainer>
  );
};

export default page;
