'use client';

import Image from 'next/image';
import KakaoSymbolImage from 'public/images/etc/kakao_symbol.png';
import LoginImage from 'public/images/service/login_image.png';
import LoginLogoImage from 'public/images/service/login_logo.png';

import PageContainer from '@/components/layout/PageContainer';

export const Signup = () => {
  const handleKakaoLogin = () => {
    const KAKAO_LOGIN_URL = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/kakao`;

    window.location.href = KAKAO_LOGIN_URL;
  };

  return (
    <PageContainer className='w-full h-dvh bg-loginGradient px-[22px] relative flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center mb-48'>
        <div className='typo-label1 font-semibold text-gray-1 text-center mb-6'>
          소중한 모임 특별한 초대
        </div>
        <Image src={LoginLogoImage} alt='logo' width={152} className='mb-16' />
        <Image src={LoginImage} alt='login' width={360} />
      </div>
      <button
        onClick={handleKakaoLogin}
        className='absolute left-[22px] right-[22px] bottom-[50px] h-[56px] rounded-[12px] flex gap-x-8 items-center justify-center bg-kakao'
      >
        <Image src={KakaoSymbolImage} alt='카카오 로그인' width={16} height={16} />
        <span className='typo-label1 font-medium text-black'>카카오로 계속하기</span>
      </button>
    </PageContainer>
  );
};
