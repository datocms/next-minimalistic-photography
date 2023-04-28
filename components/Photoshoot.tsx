import DatoImage from '@/components/DatoImage';
import { FragmentType, graphql, getFragmentData } from '@/gql';


const Photoshoot_photoshoot = graphql(/* GraphQL */ `
  fragment Photoshoot_photoshoot on PhotoshootRecord {
    coverImage {
      responsiveImage(imgixParams: { auto: format, h: 1400 }) {
        width
        height
        ...DatoImage_responsiveImage
      }
    }
  }
`);

type Props = {
  photoshoot: FragmentType<typeof Photoshoot_photoshoot>,
  total: number,
}

export function Photoshoot({
  total,
  ...rest
}: Props) {
  const photoshoot = getFragmentData(Photoshoot_photoshoot, rest.photoshoot);

  return (
    <div className="relative" style={{ counterIncrement: 'photoshoot-counter' }}>
      <div className="xl:px-10">
        <DatoImage
          pictureClassName="xl:w-auto xl:h-screen"
          layout="responsive"
          fragment={photoshoot.coverImage.responsiveImage}
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
