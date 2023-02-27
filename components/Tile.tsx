import { ReactNode } from 'react';

export function Tile({ children }: { children: ReactNode }) {
  return (
    <div className="lg:flex lg:items-stretch lg:justify-items-stretch lg:min-w-max">
      <div className="lg:flex lg:items-stretch lg:justify-items-stretch">
        {children}
      </div>
    </div>
  );
}
