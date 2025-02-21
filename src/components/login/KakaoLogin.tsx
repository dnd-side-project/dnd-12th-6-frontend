'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { useAuthStore } from '@/store/authStore';

const KakaoLogin = ({ token }: { token: string }) => {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  const name = searchParams.get('name');
  const profileImageUrl = searchParams.get('profileImageUrl');
  const email = searchParams.get('email');

  const { setUser } = useAuthStore();
  const hasRedirected = useRef(false);

  useEffect(() => {
    if (!userId || hasRedirected.current) return;
    setUser({
      userId: Number(userId),
      name: name || '',
      profileImageUrl: profileImageUrl || '',
      email: email || '',
    });

    hasRedirected.current = true;
    window.location.href = '/';
  }, [userId, name, profileImageUrl, email]);

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <>
      <div className='flex h-dvh justify-center items-center text-center typo-body text-primary-neon font-bold'>
        카카오 로그인 중...
      </div>
    </>
  );
};

export default KakaoLogin;
