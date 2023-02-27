'use client';

import Link from 'next/link';
import { ComponentProps } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';

export function ActiveLink({
  segment,
  activeClassName,
  ...props
}: ComponentProps<typeof Link> & {
  segment: string | null;
  activeClassName?: string;
}) {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <Link
      {...props}
      className={`${'className' in props ? props.className : ''} ${
        activeSegment === segment ? activeClassName : ''
      }`}
    />
  );
}
