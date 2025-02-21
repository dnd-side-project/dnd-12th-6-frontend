import type { Metadata } from 'next';

import '@/styles/globals.css';
import Providers from '@/utils/query/provider';

export const metadata: Metadata = {
  title: 'Invity - 초대장 서비스',
  description: '소중한 모임, 특별한 초대. 초대장 서비스 Invity',
  openGraph: {
    url: 'https://invity-web.vercel.app/',
    images: 'https://invity-web.vercel.app/opengraph.png',
    title: 'Invity - 초대장 서비스',
    description: '소중한 모임, 특별한 초대. 초대장 서비스 Invity',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <div className='max-w-content min-h-dvh max-h-dvh my-0 mx-auto relative'>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
