import { Metadata, ResolvingMetadata } from 'next';

import { INVITATION_API } from '@/api';
import { InvitationDTO } from '@/lib/invitation';

import InviteView from './components/InviteView';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

  // fetch data
  const res = await fetch(BASE_URL + INVITATION_API.INVITATION_KEY(id), {
    headers: {
      Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0amQxMjMxMjNAbmF0ZS5jb20iLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzQyNjMwNzUyLCJleHAiOjE3NDMyMzU1NTJ9.j15NivznHlCUeBFd0BLM0-HGB0oWlDQwJwT7qJi8omw'}`,
    },
  });
  const json: { data: InvitationDTO[]; message: string; result: string } = await res.json();

  const previousImages = (await parent).openGraph?.images || [];

  if (json?.result === 'success') {
    const data = json?.data[0];

    return {
      title: data.title,
      description: data.description,
      openGraph: {
        images: [`/invite/${id}/opengraph-image?id=${id}`, '/opengraph.jpg', ...previousImages],
      },
    };
  } else {
    return {};
  }
}

const page = ({ params }: { params: { id: string } }) => {
  return <InviteView id={params.id} />;
};

export default page;
