'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavigationBar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const links = [
    { href: '/', label: 'Home' },
    { href: '/form/zod', label: 'form/zod' },
    { href: '/supabase/comment', label: 'supabase/comment' },
    { href: '/supabase/auth/login', label: 'supabase/auth/login' },
    { href: '/supabase/protected/admin', label: 'supabase/protected/admin' },
    { href: '/supabase/protected/user', label: 'supabase/protected/user' },
  ];

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
