import React from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { ROUTER_TITLE } from '@/constants/enum';

import CreateForm from './components/CreateForm';
import PreviewBox from './components/PreviewBox';

const page = () => {
  return (
    <PageContainer>
      <PageContainer.PageHeader backButton title={ROUTER_TITLE.CREATE} />
      <PreviewBox />
      <CreateForm />
    </PageContainer>
  );
};

export default page;
