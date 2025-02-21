import KakaoLogin from '@/components/auth/KakaoLogin';
import PageContainer from '@/components/layout/PageContainer';
import { getServerSideCookie } from '@/lib/auth/cookie';

export default async function KakaoLoginPage() {
  const token = await getServerSideCookie();

  return (
    <PageContainer>
      <KakaoLogin token={token} />
    </PageContainer>
  );
}
