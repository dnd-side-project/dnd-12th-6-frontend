export interface BottomNavProps {
  children: React.ReactNode;
}

const BottomNavMain = ({ children }: BottomNavProps) => {
  return (
    <nav
      className='fixed bottom-0 w-full max-w-content h-64 px-5 pt-4
      border-t border-gray-2 shadow-[0px_-1px_6px_rgba(0,0,0,0.05)] flex'
    >
      {children}
    </nav>
  );
};

export default BottomNavMain;
