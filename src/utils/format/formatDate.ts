import { format, differenceInDays, isBefore, startOfDay, isDate } from 'date-fns';
import { ko } from 'date-fns/locale';

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
}

export function formatDateToYYYYMMDD(dateString: string): string {
  const date = new Date(dateString);

  // 날짜가 유효한지 확인
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }

  // 날짜를 'yyyy-MM-dd' 형식으로 변환
  return format(date, 'yyyy-MM-dd');
}

/**
 * "25년 1월 12일" 형식의 날짜 반환
 */
export function formatDateNoTime(dateString: string): string {
  const date = new Date(dateString);

  if (!dateString || !isDate(date)) return '';

  const year = date.getFullYear().toString().slice(2);

  return `${year}년 ${format(date, 'M월 d일')}`;
}

/**
 * "25년 12월 31일(금)" 형식의 날짜 반환
 */
export function formatDateWithDay(dateString: string): string {
  const date = new Date(dateString);

  if (!dateString || !isDate(date)) return '';

  const year = date.getFullYear().toString().slice(2); // '25년' 형식으로 변환

  return `${year}년 ${format(date, 'M월 d일(E)', { locale: ko })}`;
}

/**
 * "13:00" 형식의 시간 반환
 */
export function formatTimeOnly(dateString: string): string {
  const date = new Date(dateString);

  if (!dateString || !isDate(date)) return '';

  return format(date, 'HH:mm'); // "13:00" 형식으로 변환
}

/**
 * "25년 12월 31일 오후 00:00" 형식의 날짜 반환
 */
export function formatDateFull(dateString: string): string {
  const date = new Date(dateString);

  if (!dateString || !isDate(date)) return '';

  const year = date.getFullYear().toString().slice(2);

  return `${year}년 ${format(date, 'M월 d일 a HH:mm', { locale: ko })}`;
}
