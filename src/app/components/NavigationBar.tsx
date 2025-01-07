'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

type NavLink = {
  href: string;
  label: string;
};

const NavigationBar = ({ links }: { links: NavLink[] }) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className='overflow-x-auto px-2 overflow-hidden'>
      <ul className='flex flex-row gap-1'>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${
                isActive(href)
                  ? 'font-bold bg-foreground text-background'
                  : 'font-norma hover:bg-foreground hover:text-background'
              } px-1 transition-all duration-200`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
