import { ReactNode } from 'react';

interface DropdownRootProps {
  children: ReactNode;
}

export function DropdownRoot({ children }: DropdownRootProps) {
  return (
    <div className="absolute z-50 flex flex-col right-2 top-[6vh] bg-secondary rounded-xl w-2/4 md:w-1/4 lg:w-1/6 xl:w-[10%] py-2 px-4">
      {children}
    </div>
  );
}
