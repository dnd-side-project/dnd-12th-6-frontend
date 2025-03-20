'use client';

import Link from 'next/link';

import InviteDataFetcher from '@/components/common/Invite/modules/InviteDataFetcher';
import BackgroundView from '@/components/invite/BackgroundView';
import CTAButton from '@/components/invite/CTAButton';
import CardViewArea from '@/components/invite/CardViewArea';
import FooterArea from '@/components/invite/FooterArea';
import InviteContentArea from '@/components/invite/InviteContentArea';
import LoginModal from '@/components/invite/LoginModal';
import PageContainer from '@/components/layout/PageContainer';
import { useAuthStore } from '@/store/authStore';

const InviteView = ({ id }: { id: number }) => {
  const { isLogin } = useAuthStore();

  return (
    <PageContainer header transparent>
      <InviteDataFetcher invitationId={id}>
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
                invitationId={id}
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
      {isLogin ? (
        <Link href={`/invite/${id}/response/member`}>
          <CTAButton>응답하기</CTAButton>
        </Link>
      ) : (
        <LoginModal invitationId={id}>
          <div className='sticky bottom-0'>
            <button className='w-full h-[60px] flex items-center justify-center text-white typo-heading font-semibold bg-gray-7'>
              응답하기
            </button>
          </div>
        </LoginModal>
      )}
    </PageContainer>
  );
};

export default InviteView;
