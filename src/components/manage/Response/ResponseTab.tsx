import clsx from 'clsx';

import { TabState } from '.';

interface ResponseTabProps {
  tabState: TabState;
  setTabState: (tabState: TabState) => void;
}
const tabText = {
  all: '전체',
  accept: '참석',
  reject: '불참석',
  pending: '고민중',
};

const ResponseTab = ({ tabState, setTabState }: ResponseTabProps) => {
  return (
    <div className='px-[18px] w-full flex border-b-2 border-gray-2 text-nowrap'>
      {Object.keys(tabText).map((state) => (
        <button
          key={state}
          onClick={() => setTabState(state as TabState)}
          className={clsx(
            'flex-1 flex items-center justify-center px-10 py-12 transition-colors duration-150',
            state === tabState ? '-mb-[2px] border-b-2 border-primary-strong' : 'text-gray-4',
          )}
        >
          <div
            className={clsx(
              'typo-body font-semibold transition-colors duration-150',
              state === tabState ? 'text-gray-7' : 'text-gray-4',
            )}
          >
            {tabText[state as TabState]}
          </div>
          <span
            className={clsx(
              'px-6 py-2 ml-4 rounded-[18px] typo-caption2 font-semibold text-center transition-colors duration-150',
              state === tabState ? 'bg-primary-strong text-white' : 'bg-gray-2 text-gray-4',
            )}
          >
            11
          </span>
        </button>
      ))}
    </div>
  );
};

export default ResponseTab;
