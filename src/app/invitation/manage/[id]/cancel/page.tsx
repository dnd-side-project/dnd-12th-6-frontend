import Image from 'next/image';
import Link from 'next/link';
import KakaoSymbolImage from 'public/images/etc/kakao_symbol_primary.png';

import CopyLinkWithAlert from '@/components/common/CopyLinkWithAlert';
import Icon from '@/components/common/Icon';
import PageContainer from '@/components/layout/PageContainer';

// TODO: 복사 링크 URL 수정
export default function InvitationManageCancelPage({ params }: { params: { id: string } }) {
  const invitationId = params.id;

  return (
    <PageContainer>
      <header className='z-50 h-[54px] px-[22px] sticky top-0 flex justify-space items-center bg-transparent'>
        <Link href={`/invitation/manage/${invitationId}`} className='absolute right-[22px]'>
          <Icon name='close' className='w-24 h-24' />
        </Link>
      </header>
      <section className='absolute inset-0 h-dvh pt-[54px] pb-[60px] flex flex-col items-center justify-center'>
        <div className='text-center text-[26px] font-bold leading-9'>
          모임 취소가
          <br />
          완료되었어요
        </div>
        <div className='mt-8 mb-[18px] text-center typo-body font-medium text-gray-4'>
          모임 취소를 어떻게 알릴까요?
        </div>
        <Icon name='invite_cancel' className='w-[138px] justify-self-center' />
        <div className='mt-[60px] px-[18px] w-full flex flex-col gap-y-12'>
          <button className='w-full px-20 py-[14px] rounded-sm bg-primary-natural text-primary-strong typo-body font-semibold text-center flex items-center justify-center gap-x-6'>
            <Image src={KakaoSymbolImage} alt='카카오톡 로고' width={16} height={16} />
            카카오톡으로 알려주기
          </button>
          <CopyLinkWithAlert url=''>
            <button className='w-full px-20 py-[14px] rounded-sm bg-primary-natural text-primary-strong typo-body font-semibold text-center'>
              링크 복사하기
            </button>
          </CopyLinkWithAlert>
        </div>
        <Link href='/' className='w-full'>
          <button className='absolute bottom-0 w-full px-20 py-[18px] text-center bg-gray-7 typo-heading text-white font-semibold'>
            메인으로 가기
          </button>
        </Link>
      </section>
    </PageContainer>
  );
}
