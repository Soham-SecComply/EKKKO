'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV } from '@/data/data';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <Link href="/" className="header__logo"><span>EKKKO</span></Link>
        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}
              className={`nav__link ${pathname === n.href || (n.href !== '/' && pathname.startsWith(n.href)) ? 'nav__link--active' : ''}`}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className={`hamburger ${open ? 'hamburger--open' : ''}`} onClick={() => setOpen(!open)}>
          <span className="hamburger__line" />
          <span className="hamburger__line" />
          <span className="hamburger__line" />
        </div>
      </div>
    </header>
  );
}
