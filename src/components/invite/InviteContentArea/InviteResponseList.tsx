import { InvitationUserResponse } from '@/lib/invitation';

import InviteMessage from './InviteMessage';

interface Props {
  responses: InvitationUserResponse[];
}
const InviteResponseList = ({ responses }: Props) => {
  return (
    <div className='mt-[22px]'>
      <div className='mb-[22px] flex flex-col gap-[22px]'>
        {responses.map((response, index) => (
          <InviteMessage key={index} response={response} />
        ))}
      </div>
      <div className='h-[46px] content-center text-center'>
        <button className='type-body font-bold'>더보기</button>
      </div>
    </div>
  );
};

export default InviteResponseList;
