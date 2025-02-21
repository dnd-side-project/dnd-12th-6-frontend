import { Button } from '@/components/common/Button';
import { invitationType } from '@/lib/invitation';

interface HistoryTabProps {
  historyType: invitationType;
  setHistoryType: (historyType: invitationType) => void;
}
const HistoryTab = ({ historyType, setHistoryType }: HistoryTabProps) => {
  return (
    <div className='flex gap-x-8 font-semibold'>
      <Button
        variant={historyType === 'CREATOR' ? 'default' : 'secondary'}
        size={'tab'}
        className='typo-label1 font-semibold'
        onClick={() => setHistoryType('CREATOR')}
      >
        보낸 초대장
      </Button>
      <Button
        variant={historyType === 'INVITED' ? 'default' : 'secondary'}
        size={'tab'}
        className='typo-label1 font-semibold'
        onClick={() => setHistoryType('INVITED')}
      >
        받은 초대장
      </Button>
    </div>
  );
};

export default HistoryTab;
