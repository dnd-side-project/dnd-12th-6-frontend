import PageContainer from '@/components/layout/PageContainer';
import KakaoLogin from '@/components/login/KakaoLogin';
import { getServerSideCookie } from '@/lib/auth/cookie';

export default async function KakaoLoginPage() {
  const token = await getServerSideCookie();

  return (
    <PageContainer>
      <KakaoLogin token={token} />
    </PageContainer>
  );
}
