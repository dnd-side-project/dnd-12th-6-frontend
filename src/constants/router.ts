/**
 * router 링크 정의
 */
const ROUTER_PATH = {
  MAIN: '/', // 메인
  ONBOARDING: '/onboarding', // 온보딩
  LOGIN: '/login', // 로그인
  KAKAO_LOGIN: '/auth/kakao', // 카카오 로그인 callback
  SETTING: '/SETTING', // 설정
  INVITATION: {
    LIST: '/list', // 초대장 목록
    CREATE: '/create', // 초대장 생성
    EDIT_CARD: '/create/card', // 초대장 카드 수정
    SUCCESS: (id: number) => `/create/success/${id}`, // 초대장 생성 완료
    SHARD_VIEW: (id: number) => `/invite/${id}`, // 초대장 공유 링크 페이지
    RESPONSE: (id: number) => `/invite/${id}/response`, // 초대장 응답 페이지
    MANAGE: (id: string) => `/invitation/manage/${id}`, // 초대장 관리
    CANCEL: (id: number) => `/invitation/manage/${id}/cancel`, // 초대장 취소
  },
} as const;

export default ROUTER_PATH;
