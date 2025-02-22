'use client';

import InviteDataFetcher from '@/components/common/Invite/modules/InviteDataFetcher';
import BackgroundView from '@/components/invite/BackgroundView';
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
              {console.log(data)}
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
                place={data.detailAddress}
                date={data.date}
                maxAttendances={data.maxAttendances}
                description={data.description}
              />
            </>
          )
        }
      </InviteDataFetcher>
      <FooterArea />
      {/* <LoginModal>
        <CTAButton>응답하기</CTAButton>
      </LoginModal> */}
      <LoginModal>
        <div className='sticky bottom-0'>
          <button className='w-full h-[60px] flex items-center justify-center text-white typo-heading font-semibold bg-gray-7'>
            응답하기
          </button>
        </div>
      </LoginModal>
    </PageContainer>
  );
};

export default page;
