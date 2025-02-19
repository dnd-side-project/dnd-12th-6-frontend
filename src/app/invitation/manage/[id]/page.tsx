import PageContainer from '@/components/layout/PageContainer';
import InvitationManage from '@/components/manage/Invitation';
import InvitationResponse from '@/components/manage/Response';

export default function InvitationManagePage({ params }: { params: { id: string } }) {
  console.log(params.id);
  return (
    <PageContainer>
      <PageContainer.PageHeader backButton />
      <div className='relative h-[calc(100dvh-54px)] flex flex-col'>
        <InvitationManage />
        <InvitationResponse />
      </div>
    </PageContainer>
  );
}
