import { cookies } from 'next/headers';

export async function getServerSideCookie() {
  const cookieStore = cookies();

  return cookieStore.get('token')?.value || '';
}
