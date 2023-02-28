import { ReactNode } from 'react';

export function Tile({ children }: { children: ReactNode }) {
  return (
    <div className="xl:flex xl:items-stretch xl:justify-items-stretch xl:min-w-max">
      <div className="xl:flex xl:items-stretch xl:justify-items-stretch">
        {children}
      </div>
    </div>
  );
}
