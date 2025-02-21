'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Notfound() {
  const router = useRouter();

  useEffect(() => {
    router.push('/main');
  }, []);

  return null;
}
