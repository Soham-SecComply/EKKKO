'use client';

import { usePathname } from 'next/navigation';
import { useAnimations, usePageAnimations } from './useAnimations';

export default function AppShell({ children }) {
  const pathname = usePathname();
  useAnimations();
  usePageAnimations([pathname]);
  return <div className="page-enter">{children}</div>;
}
