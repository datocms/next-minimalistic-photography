import { HomeQuery } from '@/graphql/generated';
import { DatoImage } from './DatoImage';

export function Photoshoot({
  photoshoot,
  total,
}: {
  photoshoot: HomeQuery['photoshoots'][0];
  total: number;
}) {
  return (
    <div className="relative" style={{ counterIncrement: 'photoshoot-counter' }}>
      <div className="xl:px-10">
        <DatoImage
          pictureClassName="xl:w-auto xl:h-screen"
          layout="responsive"
          data={photoshoot.coverImage.responsiveImage}
          sizes={`100vw, (min-width: 1024px) ${(photoshoot.coverImage.responsiveImage.width /
              photoshoot.coverImage.responsiveImage.height) *
            100
            }vh`}
        />
      </div>
      <div className="hidden xl:flex absolute z-10 bottom-[250px] left-0 -rotate-90 origin-top-left items-center text-black">
        <div className="before:content-[counter(photoshoot-counter)]" />
        <div className="h-[2px] w-[100px] mx-2 bg-black" />
        <div>{total}</div>
      </div>
    </div>
  );
}
