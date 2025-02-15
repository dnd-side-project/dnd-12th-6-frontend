import React from 'react';

import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import { ROUTER_TITLE } from '@/constants/enum';

import CreateForm from './components/CreateForm';
import PreviewBox from './components/PreviewBox';

const page = () => {
  return (
    <PageContainer>
      <PageHeader backButton title={ROUTER_TITLE.CREATE} />
      <PreviewBox />
      <CreateForm />
    </PageContainer>
  );
};

export default page;
