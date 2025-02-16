'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { useAuthStore } from '@/store/authStore';

export default function KakaoLoginPage() {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  const name = searchParams.get('name');
  const profileImageUrl = searchParams.get('profileImageUrl');
  const email = searchParams.get('email');

  const { setUser } = useAuthStore();

  useEffect(() => {
    setUser({
      userId: Number(userId),
      name: name || '',
      profileImageUrl: profileImageUrl || '',
      email: email || '',
    });
    window.location.href = '/';
  }, []);

  return (
    <PageContainer>
      <div className='flex h-dvh justify-center items-center text-center typo-body text-primary-neon font-bold'>
        카카오 로그인 중...
      </div>
    </PageContainer>
  );
}
