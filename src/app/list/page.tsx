import PageContainer from '@/components/layout/PageContainer';
import InvitationList from '@/components/list/InvitationList';
import InvitationTabs from '@/components/list/InvitationTabs';

export default function ListPage() {
  return (
    <PageContainer header bottomNav className='pb-0'>
      <div className='absolute top-0 bg-gray-1 min-w-full h-[calc(100dvh-64px)] overflow-y-scroll [&::-webkit-scrollbar]:hidden'>
        <InvitationTabs />
        <InvitationList />
      </div>
    </PageContainer>
  );
}
