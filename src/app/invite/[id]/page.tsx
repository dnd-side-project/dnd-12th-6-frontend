import BackgroundView from '@/components/invite/BackgroundView';
import CTAButton from '@/components/invite/CTAButton';
import CardViewArea from '@/components/invite/CardViewArea';
import FooterArea from '@/components/invite/FooterArea';
import InviteContentArea from '@/components/invite/InviteContentArea';
import LoginModal from '@/components/invite/LoginModal';
import PageContainer from '@/components/layout/PageContainer';

const page = () => {
  return (
    <PageContainer header transparent>
      <BackgroundView />
      <CardViewArea />
      <InviteContentArea />
      <FooterArea />
      <LoginModal>
        <CTAButton />
      </LoginModal>
    </PageContainer>
  );
};

export default page;
