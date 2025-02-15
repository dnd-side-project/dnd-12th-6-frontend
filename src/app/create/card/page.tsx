import React from 'react';

import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import { ROUTER_TITLE } from '@/constants/enum';

const page = () => {
  return (
    <PageContainer>
      <PageHeader backButton title={ROUTER_TITLE.EDIT_CARD} />
    </PageContainer>
  );
};

export default page;
