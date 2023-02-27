'use client';

import { useRef, useEffect, ReactNode } from 'react';

export function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;

    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;

        e.preventDefault();

        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
        });
      };

      el.addEventListener('wheel', onWheel);

      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return elRef;
}

export function HorizontalScroller({ children }: { children: ReactNode }) {
  const scrollRef = useHorizontalScroll();

  return (
    <div
      className="fixed inset-0 overflow-x-auto flex items-stretch"
      ref={scrollRef}
    >
      {children}
    </div>
  );
}
