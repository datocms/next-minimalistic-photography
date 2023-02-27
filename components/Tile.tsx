import { ReactNode } from 'react';

export function Tile({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-stretch justify-items-stretch min-w-max ${
        className || ''
      }`}
    >
      <div className="flex items-stretch justify-items-stretch">{children}</div>
    </div>
  );
}
