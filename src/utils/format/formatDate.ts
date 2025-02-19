import { format, differenceInDays, isBefore, startOfDay } from 'date-fns';

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(2);

  return `${year}년 ${format(date, 'M월 d일 HH:mm')}`;
}

export function getDdayInfo(targetDateStr: string) {
  const targetDate = new Date(targetDateStr);
  const today = startOfDay(new Date());

  const diffDays = differenceInDays(targetDate, today);
  const isPassed = isBefore(targetDate, today);

  return {
    dDay: diffDays === 0 ? 'DAY' : `${Math.abs(diffDays)}`,
    isPassed,
  };
}

export function formatDateForManage(dateStr: string) {
  const targetDate = new Date(dateStr);

  return format(targetDate, 'yy.MM.dd H:mm');

export function formatDateToYYYYMMDD(dateString: string): string {
  const date = new Date(dateString);

  // 날짜가 유효한지 확인
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }

  // 날짜를 'yyyy-MM-dd' 형식으로 변환
  return format(date, 'yyyy-MM-dd');
}

export function formatDateNoTime(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(2);

  return `${year}년 ${format(date, 'M월 d일')}`;
}
