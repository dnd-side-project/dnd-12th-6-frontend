import { ImageResponse } from 'next/og';

// Open Graph 기본 설정
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = 'image/png';

export const runtime = 'edge';

export async function GET({ id = 0 }: { id: number }) {
  const mock = {
    theme: 'confetti',
    title: '초대합니다!! 초대장 🔥 초대합니다!! 초대장 🔥 초대합니다!! 초대장 🔥' + id,
    sticker: 'confetti',
    fontName: 'basic',
    background: 'purple',
    backgroundImageData: '',
  } as const;

  const BASE_URL = 'https://invity-web.vercel.app';
  const envelopeImg = `${BASE_URL}/images/card/envelope_${mock.theme}.png`;
  const stickerLeftImg = `${BASE_URL}/images/sticker/sticker_${mock.sticker}_L.png`;
  const stickerRightImg = `${BASE_URL}/images/sticker/sticker_${mock.sticker}_R.png`;

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
                top: '-23px', // 이미지 위치 조정
              }}
            >
              <img src={stickerLeftImg} height={90} alt='' />
            </div>
            <div
              style={{
                zIndex: 0,
                display: 'flex',
                position: 'absolute',
                right: 0,
                bottom: '-27px', // 이미지 위치 조정
              }}
            >
              <img src={stickerRightImg} height={90} alt='' />
            </div>
          </div>
          <div
            style={{
              padding: '48px',
              position: 'absolute',
              top: 0,
              zIndex: 1, // 제목이 이미지 위에 있도록 조정
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: 'white',
              fontSize: '30px',
              lineHeight: '140%',
              letterSpacing: '-0.02em',
              fontWeight: '700',
            }}
          >
            {mock.title}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
