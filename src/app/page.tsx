import PageContainer from '@/components/layout/PageContainer';
import InvitationHistory from '@/components/main/InvitationHistory';
import UpcomingInvitation from '@/components/main/UpcomingInvitation';

export default function Home() {
  return (
    <PageContainer header bottomNav>
      <UpcomingInvitation />
      <hr className='h-48 border-none' />
      <InvitationHistory />
    </PageContainer>
  );
}
