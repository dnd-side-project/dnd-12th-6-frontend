'use client';

import InviteDataFetcher from '@/components/common/Invite/modules/InviteDataFetcher';
import BackgroundView from '@/components/invite/BackgroundView';
import CTAButton from '@/components/invite/CTAButton';
import CardViewArea from '@/components/invite/CardViewArea';
import FooterArea from '@/components/invite/FooterArea';
import InviteContentArea from '@/components/invite/InviteContentArea';
import LoginModal from '@/components/invite/LoginModal';
import PageContainer from '@/components/layout/PageContainer';

const page = ({ params }: { params: { id: string } }) => {
  return (
    <PageContainer header transparent>
      <InviteDataFetcher invitationId={Number(params.id)}>
        {(data) =>
          data && (
            <>
              <BackgroundView
                backgroundImageData={data.backgroundImageData}
                basicBackgroundType={data.basicBackgroundType}
              />
              <CardViewArea
                hostProfileImageUrl={data.hostProfileImageUrl}
                organizerName={data.organizerName}
                title={data.title}
                themeName={data.themeName}
                fontName={data.fontName}
                sticker={data.sticker}
              />
              <InviteContentArea
                invitationId={Number(params.id)}
                place={data.place}
                date={data.date}
                maxAttenances={data.maxAttenances}
                description={data.description}
              />
            </>
          )
        }
      </InviteDataFetcher>
      <FooterArea />
      <LoginModal>
        <CTAButton>응답하기</CTAButton>
      </LoginModal>
    </PageContainer>
  );
};

export default page;
