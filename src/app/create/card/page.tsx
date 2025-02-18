import CardContainer from '@/components/card/CardContainer';
import {
  PageHeaderCancelButton,
  PageHeaderCompleteButton,
} from '@/components/card/PageHeaderButton';
import PageContainer from '@/components/layout/PageContainer';
import { ROUTER_TITLE } from '@/constants/enum';

const page = () => {
  return (
    <PageContainer>
      <PageContainer.PageHeader
        title={ROUTER_TITLE.EDIT_CARD}
        left={<PageHeaderCancelButton />}
        right={<PageHeaderCompleteButton />}
      />
      <CardContainer />
    </PageContainer>
  );
};

export default page;
