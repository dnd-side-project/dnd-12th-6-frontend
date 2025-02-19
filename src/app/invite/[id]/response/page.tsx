import React from 'react';

import Icon from '@/components/common/Icon';
import ResponseForm from '@/components/invite/ResponseForm';
import PageContainer from '@/components/layout/PageContainer';

const page = () => {
  return (
    <PageContainer>
      <PageContainer.PageHeader
        title='응답하기'
        right={
          <button>
            <Icon name='close' className='w-24 h-24' />
          </button>
        }
      />
      <div className='py-32 px-[18px]'>
        <ResponseForm />
      </div>
    </PageContainer>
  );
};

export default page;
