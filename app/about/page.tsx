import DatoImage from '@/components/DatoImage';
import { graphql } from '@/gql';
import { request } from '@/lib/dato';
import { renderMetaTags } from 'react-datocms/seo';
import {
  StructuredText,
  StructuredTextDocument,
} from 'react-datocms/structured-text';

const query = graphql(/* GraphQL */ `
  query About {
    aboutPage {
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
        responsiveImage(imgixParams: { auto: format, w: 150 }) {
          ...DatoImage_responsiveImage
        }
      }
      image {
        focalPoint {
          x
          y
        }
        responsiveImage(imgixParams: { auto: format, h: 1400 }) {
          ...DatoImage_responsiveImage
        }
      }
    }
  }
`);

export default async function Home() {
  const { aboutPage } = await request(query, {});

  if (!aboutPage) {
    return null;
  }

  return (
    <main>
      {renderMetaTags(aboutPage._seoMetaTags)}
      <div className="mx-7 py-12 max-w-[800px] xl:m-0 lg:w-[55vw] 2xl:w-[50vw] lg:max-w-[1100px] xl:p-32 overflow-auto xl:box-border">
        <div>
          <div className="uppercase tracking-widest text-sm mb-12 xl:mb-20 xl:mt-16">
            {aboutPage.kicker}
          </div>
          <h1 className="text-black font-serif mb-12 text-5xl xl:text-8xl tracking-tight">
            {aboutPage.title}
          </h1>
          <div className="text-xl mb-12 leading-loose">
            <StructuredText
              data={aboutPage.subtitle.value as StructuredTextDocument}
            />
          </div>
          <div className="prose max-w-none">
            <StructuredText
              data={aboutPage.content.value as StructuredTextDocument}
            />
          </div>
        </div>
        <div className="mt-10 flex">
          <DatoImage
            fragment={aboutPage.signature.responsiveImage}
          />
        </div>
      </div>
      <div className="hidden xl:block fixed inset-0 left-auto w-[45vw] 2xl:w-[50vw]">
        <DatoImage
          layout="fill"
          fragment={aboutPage.image.responsiveImage}
          objectFit="cover"
          objectPosition={`left ${aboutPage.image.focalPoint.x * 100}% top ${aboutPage.image.focalPoint.y * 100
            }%`}
          sizes="50vw"
        />
      </div>
      <div className="xl:hidden">
        <DatoImage layout="responsive" fragment={aboutPage.image.responsiveImage} />
      </div>
    </main>
  );
}
