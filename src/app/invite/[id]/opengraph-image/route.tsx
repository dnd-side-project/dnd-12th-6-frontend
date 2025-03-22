import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

import { INVITATION_API } from '@/api';
import { InvitationDTO } from '@/lib/invitation';

// Open Graph 기본 설정
const size = {
  width: 1200,
  height: 600,
};

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id') || ''; // 쿼리 파라미터로 전달됨

  /** 폰트 파일 */
  const basicFont = await fetch(
    new URL('../../../../../public/fonts/Pretendard-Bold.otf', import.meta.url),
  ).then((res) => res.arrayBuffer());
  const cuteFont = await fetch(
    new URL('../../../../../public/fonts/BaskinrobbinsB.otf', import.meta.url),
  ).then((res) => res.arrayBuffer());
  const boldFont = await fetch(
    new URL('../../../../../public/fonts/GmarketSansBold.otf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  /** fetch data */
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';
  const res = await fetch(BASE_URL + INVITATION_API.INVITATION_KEY(id), {
    headers: {
      Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0amQxMjMxMjNAbmF0ZS5jb20iLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzQyNjMwNzUyLCJleHAiOjE3NDMyMzU1NTJ9.j15NivznHlCUeBFd0BLM0-HGB0oWlDQwJwT7qJi8omw'}`,
    },
  });
  const json: { data: InvitationDTO[]; message: string; result: string } = await res.json();

  if (json.result !== 'success') {
    return new ImageResponse(<></>);
  }

  const data = json?.data[0];

  /** 데이터 바인딩 */
  const CLIENT_URL = 'https://invity-web.vercel.app';
  const envelopeImg = `${CLIENT_URL}/images/card/envelope_${data.themeName}.png`;
  const stickerLeftImg = `${CLIENT_URL}/images/sticker/sticker_${data.sticker}_L.png`;
  const stickerRightImg = `${CLIENT_URL}/images/sticker/sticker_${data.sticker}_R.png`;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column', // 세로 정렬
          width: '100%',
          height: '100%',
          background: '#6F3CC8',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* 카드 컨테이너 */}
        <div
          style={{
            width: '400px',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            // border: '2px solid white', // 테두리 추가 (디버깅용)
          }}
        >
          {/* 내부 컨텐츠 */}
          <div
            style={{
              zIndex: 0,
              display: 'flex',
              position: 'absolute',
              top: '0', // 이미지 위치 조정
            }}
          >
            <img src={envelopeImg} width={400} height={400} alt='' />
            <div
              style={{
                zIndex: 0,
                display: 'flex',
                position: 'absolute',
                top: '-30px', // 이미지 위치 조정
              }}
            >
              <img src={stickerLeftImg} height={120} alt='' />
            </div>
            <div
              style={{
                zIndex: 0,
                display: 'flex',
                position: 'absolute',
                right: 0,
                bottom: '-30px', // 이미지 위치 조정
              }}
            >
              <img src={stickerRightImg} height={120} alt='' />
            </div>
          </div>
          <div
            style={{
              padding: '48px',
              position: 'absolute',
              top: data.themeName === 'mono' ? -50 : 0,
              zIndex: 1, // 제목이 이미지 위에 있도록 조정
              width: '80%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: 'white',
              fontSize: '24px',
              lineHeight: '140%',
              letterSpacing: '-0.02em',
              fontFamily: data.fontName,
            }}
          >
            {data.title}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'basic',
          data: basicFont,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'bold',
          data: boldFont,
          style: 'normal',
          weight: 500,
        },
        {
          name: 'cute',
          data: cuteFont,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  );
}
