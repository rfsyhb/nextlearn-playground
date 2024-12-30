'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavigationBar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const links = [
    { href: '/', label: 'Home' },
    { href: '/fetch/tanstack', label: 'fetchTanstack' },
    { href: '/form/zod', label: 'formWithZod' },
  ];

  return (
    <nav className='overflow-auto'>
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
