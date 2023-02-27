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
      <div className="lg:px-10">
        <DatoImage
          pictureClassName="lg:w-auto lg:h-screen"
          layout="responsive"
          data={work.coverImage.responsiveImage}
          sizes={`100vw, (min-width: 1024px) ${
            (work.coverImage.responsiveImage.width /
              work.coverImage.responsiveImage.height) *
            100
          }vh`}
        />
      </div>
      <div className="hidden lg:flex absolute z-10 bottom-[250px] left-0 -rotate-90 origin-top-left items-center">
        <div className="before:content-[counter(work-counter)]" />
        <div className="h-[2px] w-[100px] mx-2 bg-black" />
        <div>{total}</div>
      </div>
    </div>
  );
}
