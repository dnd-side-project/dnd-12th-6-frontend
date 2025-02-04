import { useTabState } from '../modules/TabContext';

const TabCount = () => {
  const { count } = useTabState();

  return (
    <span className='min-w-[19px] px-6 py-1 text-caption2 text-gray-5 bg-gray-2 rounded-round'>
      {count}
    </span>
  );
};

export default TabCount;
