import { Metadata, ResolvingMetadata } from 'next';

import CompleteAlertHandler from '@/components/invite/ResponseCompleteAlert/CompleteAlertHandler';

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

  // const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

  // fetch data
  // const data = await fetch(BASE_URL + INVITATION_API.INVITATION(Number(id))).then((res) =>
  //   res.json(),
  // );

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: 'Invity - 초대장',
    description: '초대합니다!! 초대장 🔥 초대합니다!! 초대장 🔥 초대합니다!! 초대장 🔥',
    openGraph: {
      images: [`/invite/${id}/opengraph-image?id=${id}`, '/opengraph.jpg', ...previousImages],
    },
  };
}

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <InviteView id={Number(params.id)} />
      <CompleteAlertHandler />
    </>
  );
};

export default page;
