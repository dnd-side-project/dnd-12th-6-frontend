import { format } from 'date-fns';

export default function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(2);

  return `${year}년 ${format(date, 'M월 d일 HH:mm')}`;
}
