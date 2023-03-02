import { DatoImage } from '@/components/DatoImage';
import { AboutQuery } from '@/graphql/generated';
import { gql, request } from '@/lib/dato';
import { renderMetaTags } from 'react-datocms/seo';
import {
  StructuredText,
  StructuredTextDocument,
} from 'react-datocms/structured-text';

const query = gql`
  query About {
    about {
      _seoMetaTags {
        tag
        attributes
        content
      }

      kicker
      title
      subtitle {
        value
      }
      content {
        value
      }
      signature {
        responsiveImage(imgixParams: { auto: format, w: 800 }) {
          src
          srcSet
          base64
          width
          height
        }
      }
      image {
        focalPoint {
          x
          y
        }
        responsiveImage(imgixParams: { auto: format, h: 1400 }) {
          src
          srcSet
          base64
          width
          height
        }
      }
    }
  }
`;

export default async function Home() {
  const { about } = await request<AboutQuery>(query);

  if (!about) {
    return null;
  }

  return (
    <main>
      {renderMetaTags(about._seoMetaTags)}
      <div className="mx-7 py-12 max-w-[800px] xl:m-0 lg:w-[55vw] 2xl:w-[50vw] lg:max-w-[1100px] xl:p-32 overflow-auto xl:box-border">
        <div>
          <div className="uppercase tracking-widest text-sm mb-12 xl:mb-20 xl:mt-16">
            {about.kicker}
          </div>
          <h1 className="text-black font-serif mb-12 text-5xl xl:text-8xl tracking-tight">
            {about.title}
          </h1>
          <div className="text-xl mb-12 leading-loose">
            <StructuredText
              data={about.subtitle.value as StructuredTextDocument}
            />
          </div>
          <div className="prose max-w-none">
            <StructuredText
              data={about.content.value as StructuredTextDocument}
            />
          </div>
        </div>
        <div className="mt-10 flex justify-end">
          <DatoImage data={about.signature.responsiveImage} sizes="100vw" />
        </div>
      </div>
      <div className="hidden xl:block fixed inset-0 left-auto w-[45vw] 2xl:w-[50vw]">
        <DatoImage
          layout="fill"
          data={about.image.responsiveImage}
          objectFit="cover"
          objectPosition={`${about.image.focalPoint.x * 100}% ${
            about.image.focalPoint.y * 100
          }%`}
          sizes="50vw"
        />
      </div>
      <div className="xl:hidden">
        <DatoImage layout="responsive" data={about.image.responsiveImage} />
      </div>
    </main>
  );
}
