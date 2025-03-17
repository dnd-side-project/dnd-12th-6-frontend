import Link from 'next/link';

import CTAButton from '@/components/invite/CTAButton';
import PageContainer from '@/components/layout/PageContainer';
import ROUTER_PATH from '@/constants/router';

export default function NotFound() {
  return (
    <PageContainer>
      <div className='h-[calc(100dvh-60px)] flex flex-col justify-center gap-[13px] items-center'>
        <h1 className='typo-title !text-[48px] font-bold text-gray-7 text-center'>404</h1>
        <p className='type-body font-medium text-gray-4 text-center'>
          찾으시는 페이지가 존재하지 않아요!{' '}
        </p>
      </div>
      <div className='fixed bottom-0 max-w-content w-full'>
        <Link href={ROUTER_PATH.MAIN}>
          <CTAButton>홈으로 돌아가기</CTAButton>
        </Link>
      </div>
    </PageContainer>
  );
}
