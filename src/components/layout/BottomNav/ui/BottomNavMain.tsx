export interface BottomNavProps {
  children: React.ReactNode;
}

const BottomNavMain = ({ children }: BottomNavProps) => {
  return (
    <nav
      className='fixed bottom-0 w-full max-w-content h-64 px-5 pt-4
      border-t border-gray-2 drop-shadow-navbar flex bg-white'
    >
      {children}
    </nav>
  );
};

export default BottomNavMain;
