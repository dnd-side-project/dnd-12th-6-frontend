import PageContainer from '@/components/layout/PageContainer';
import { ROUTER_TITLE } from '@/constants/enum';

const page = () => {
  return (
    <PageContainer>
      <PageContainer.PageHeader backButton title={ROUTER_TITLE.EDIT_CARD} />
      <div>초대장 꾸미기 페이지</div>
    </PageContainer>
  );
};

export default page;
