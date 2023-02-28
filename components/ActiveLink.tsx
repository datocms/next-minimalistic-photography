'use client';

import Link from 'next/link';
import { ComponentProps } from 'react';
import { usePathname } from 'next/navigation';

export function ActiveLink({
  activeClassName,
  ...props
}: ComponentProps<typeof Link> & {
  activeClassName?: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={`${'className' in props ? props.className : ''} ${
        props.href === pathname ? activeClassName : ''
      }`}
    />
  );
}
