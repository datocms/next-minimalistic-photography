import { HomeQuery } from '@/graphql/generated';
import { ReactNode } from 'react';
import { DatoImage } from './DatoImage';

export function Work({
  work,
  total,
}: {
  work: HomeQuery['works'][0];
  total: number;
}) {
  return (
    <div className="relative" style={{ counterIncrement: 'work-counter' }}>
      <div className="px-10">
        <DatoImage
          pictureStyle={{ width: 'auto', height: '100vh' }}
          data={work.coverImage.responsiveImage}
          sizes={`${
            (work.coverImage.responsiveImage.width /
              work.coverImage.responsiveImage.height) *
            100
          }vh`}
        />
      </div>
      <div className="absolute z-10 bottom-[250px] left-0 -rotate-90 origin-top-left flex items-center">
        <div className="before:content-[counter(work-counter)]" />
        <div className="h-[2px] w-[100px] mx-2 bg-black" />
        <div>{total}</div>
      </div>
    </div>
  );
}
