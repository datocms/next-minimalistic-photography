import { HorizontalScroller } from '@/components/HorizontalScroller';
import { Tile } from '@/components/Tile';
import { UnwrapStructuredText } from '@/components/UnwrapStructuredText';
import { Photoshoot } from '@/components/Photoshoot';
import { request } from '@/lib/dato';
import { toNextMetadata } from 'react-datocms/seo';
import {
  StructuredText,
  StructuredTextDocument,
} from 'react-datocms/structured-text';

import { Metadata } from 'next';

import query from './page.graphql'

const getHomepageContent = async () => await request(query);

export async function generateMetadata(): Promise<Metadata> {
  const { homepage } = await getHomepageContent()
 
  return toNextMetadata(homepage?._seoMetaTags || [])
}

export default async function Home() {
  const {
    homepage,
    photoshoots,
    meta: { count },
  } = await getHomepageContent();

  return (
    <main style={{ counterReset: 'photoshoot-counter' }}>
      {/* {renderMetaTags(homepage?._seoMetaTags || [])} */}
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
        {photoshoots.map((photoshoot) => (
          <Tile key={photoshoot.id}>
            <Photoshoot photoshoot={photoshoot} total={count} />
          </Tile>
        ))}
      </HorizontalScroller>
    </main>
  );
}
