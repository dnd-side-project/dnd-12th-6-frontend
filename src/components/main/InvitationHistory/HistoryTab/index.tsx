import { Button } from '@/components/common/Button';

interface HistoryTabProps {
  historyType: 'SENT' | 'RECEIVED';
  setHistoryType: (historyType: 'SENT' | 'RECEIVED') => void;
}
const HistoryTab = ({ historyType, setHistoryType }: HistoryTabProps) => {
  return (
    <div className='flex gap-x-8 font-semibold'>
      <Button
        variant={historyType === 'SENT' ? 'default' : 'secondary'}
        size={'tab'}
        className='typo-label1 font-semibold'
        onClick={() => setHistoryType('SENT')}
      >
        보낸 초대장
      </Button>
      <Button
        variant={historyType === 'RECEIVED' ? 'default' : 'secondary'}
        size={'tab'}
        className='typo-label1 font-semibold'
        onClick={() => setHistoryType('RECEIVED')}
      >
        받은 초대장
      </Button>
    </div>
  );
};

export default HistoryTab;
