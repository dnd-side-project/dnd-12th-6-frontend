import { PropsWithChildren } from 'react';

const TabText = ({ children }: PropsWithChildren) => {
  return <p className='text-label1 text-gray-4'>{children}</p>;
};

export default TabText;
