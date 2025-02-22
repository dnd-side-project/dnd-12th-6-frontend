import { Metadata } from 'next';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const ogImageUrl = `https://invity-web.vercel.app/invite/${id}/opengraph-image`;

  return {
    title: `Invity - 초대장 서비스`,
    description: '소중한 모임, 특별한 초대. 초대장 서비스 Invity',
    openGraph: {
      title: `Invity 초대장 서비스`,
      description: '소중한 모임, 특별한 초대. 초대장 서비스 Invity',
      url: `https://invity-web.vercel.app/invite/${id}`,
      images: ogImageUrl, // ✅ 동적 OG 이미지 설정
    },
  };
}

export default function CreateLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
