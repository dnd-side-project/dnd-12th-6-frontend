import PageContainer from '@/components/layout/PageContainer';

import BackgroundView from './components/BackgroundView';
import CTAButton from './components/CTAButton';
import CardViewArea from './components/CardViewArea';
import FooterArea from './components/FooterArea';
import InviteContentArea from './components/InviteContentArea';

const page = () => {
  return (
    <PageContainer header transparent>
      <BackgroundView />
      <CardViewArea />
      <InviteContentArea />
      <FooterArea />
      <CTAButton />
    </PageContainer>
  );
};

export default page;
