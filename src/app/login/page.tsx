'use client';

export default function LoginTest() {
  const handleKakaoLogin = () => {
    const KAKAO_LOGIN_URL = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/kakao`;

    window.location.href = KAKAO_LOGIN_URL;
  };

  return (
    <>
      <button onClick={handleKakaoLogin}>카카오 로그인</button>
    </>
  );
}
