import LogoImage from 'public/logo.svg';

const FooterArea = () => {
  return (
    <div className='mt-80 mb-[120px] flex flex-col gap-[13px] items-center'>
      <LogoImage height={34} />
      <ul className='flex items-center gap-8 text-white typo-caption2'>
        <li>© 2025 INVITY</li>
        <li className='w-1 h-[9px] bg-white rounded-round'></li>
        <li className='underline'>Terms & Privacy</li>
        <li className='w-1 h-[9px] bg-white rounded-round'></li>
        <li className='underline'>FAQ</li>
      </ul>
    </div>
  );
};

export default FooterArea;
