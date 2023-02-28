import { HorizontalScroller } from '@/components/HorizontalScroller';
import { Tile } from '@/components/Tile';
import { UnwrapStructuredText } from '@/components/UnwrapStructuredText';
import { Work } from '@/components/Work';
import { HomeDocument, HomeQuery } from '@/graphql/generated';
import { gql, request } from '@/lib/dato';
import { renderMetaTags } from 'react-datocms/seo';
import {
  StructuredText,
  StructuredTextDocument,
} from 'react-datocms/structured-text';

const query = gql`
  query Home {
    homepage {
      _seoMetaTags {
        tag
        attributes
        content
      }
      title
      tagline {
        value
      }
      description {
        value
      }
    }

    works: allWorks(orderBy: position_ASC) {
      id
      coverImage {
        responsiveImage(imgixParams: { auto: format, h: 1400 }) {
          src
          srcSet
          base64
          width
          height
        }
      }
    }

    meta: _allWorksMeta {
      count
    }
  }
`;

export default async function Home() {
  const {
    homepage,
    works,
    meta: { count },
  } = await request<HomeQuery>(query);

  return (
    <main style={{ counterReset: 'work-counter' }}>
      {renderMetaTags(homepage?._seoMetaTags || [])}
      <HorizontalScroller>
        {homepage && (
          <Tile>
            <div className="mx-7 py-12 xl:m-0 xl:w-[60vw] xl:max-w-[900px] xl:flex xl:items-center xl:justify-items-center xl:p-32">
              <div>
                <div className="uppercase tracking-widest text-sm mb-12 xl:mb-20">
                  {homepage.title}
                </div>
                <h1 className="text-black font-serif mb-12 text-5xl xl:text-8xl tracking-tight">
                  <UnwrapStructuredText
                    data={homepage.tagline.value as StructuredTextDocument}
                  />
                </h1>
                <div className="leading-loose prose max-w-none">
                  <StructuredText
                    data={homepage.description.value as StructuredTextDocument}
                  />
                </div>
              </div>
            </div>
          </Tile>
        )}
        {works.map((work) => (
          <Tile key={work.id}>
            <Work work={work} total={count} />
          </Tile>
        ))}
      </HorizontalScroller>
    </main>
  );
}
