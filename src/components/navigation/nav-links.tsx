'use client';

import { Home, SquareCode, Toolbox, Handshake, ChartNoAxesCombined, LucideIcon } from 'lucide-react';
import { useScroll } from '@/context/scroll-context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
    id: string;
    icon: LucideIcon;
    href: string;
    label: string;
}

const navItems: NavItem[] = [
  { id: 'hero', icon: Home, href: '/#hero', label: 'Home' },
  { id: 'engineering', icon: Toolbox, href: '/#engineering', label: 'Product Engineering Tools' },
  { id: 'intelligence', icon: ChartNoAxesCombined, href: '/#intelligence', label: 'Data Intelligence Libraries' },
  { id: 'projects', icon: SquareCode, href: '/#projects', label: 'Recent Projects' },
  { id: 'contact', icon: Handshake, href: '/#contact', label: 'Get In Touch' },
];

const NavLinks = () => {
    const { activeSection } = useScroll();
    const pathname = usePathname();

    return (
        <ul className='flex items-center gap-4'>
            {navItems.map((item) => {
                const sectionId = item.href.split('#')[1];
                
                const isActive = pathname.startsWith('/projects')
                    ? item.id === 'projects'
                    : activeSection === sectionId;

                const IconComponent = item.icon;

                return (
                    <li key={item.id} aria-label={item.label}>
                        <Link 
                            href={item.href} 
                            aria-current={isActive ? 'page' : undefined} 
                            className={`flex items-center justify-center w-8 h-8 rounded-md transition-all duration-300
                                ${isActive 
                                    ? 'text-black bg-zinc-500 scale-110' 
                                    : 'text-zinc-400 hover:text-white hover:scale-110'
                                }`}
                        >
                            <IconComponent size={20} />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavLinks;