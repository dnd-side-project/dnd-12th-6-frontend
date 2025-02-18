import CardBackground from '@/components/card/CardBackground';
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
      <CardBackground />
    </PageContainer>
  );
};

export default page;
