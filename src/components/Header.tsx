import { List, X } from 'phosphor-react';

import { Logo } from './Logo';

interface HeaderProps {
  sidebarIsOpen: boolean
  setSidebarIsOpen: (value: boolean) => void;
}

export function Header({ sidebarIsOpen, setSidebarIsOpen }: HeaderProps) {
  return (
    <header className="w-full py-5 px-6 flex items-center justify-between md:justify-center bg-gray-700 border-b border-gray-600">
      <Logo className="w-[167px] h-[24px] md:w-auto md:h-auto" />
        
      <div className="flex items-center gap-2 md:hidden">
        <p className="text-sm text-gray-100">Aulas</p>
        <button className="text-blue-500" onClick={() => setSidebarIsOpen(!sidebarIsOpen)} >
          { sidebarIsOpen ? <X size={32} /> : <List size={32} /> }
        </button>
      </div>
    </header>
  );
}