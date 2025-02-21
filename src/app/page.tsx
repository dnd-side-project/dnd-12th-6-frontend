'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (!token) {
        window.location.href = '/onboarding'; // token이 없으면 /onboarding으로 이동
      } else {
        window.location.href = '/main';
      }
    }
  }, []);

  return null;
}
