import KakaoLogin from '@/components/auth/KakaoLogin';
import PageContainer from '@/components/layout/PageContainer';

export default async function KakaoLoginPage() {
  //const token = await getServerSideCookie();

  return (
    <PageContainer>
      <KakaoLogin />
    </PageContainer>
  );
}
