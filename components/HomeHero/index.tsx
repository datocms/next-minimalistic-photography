import { HomeHeroDocument } from '@/graphql/generated';
import { request } from '@/lib/dato';
import {
  StructuredText,
  StructuredTextDocument,
} from 'react-datocms/structured-text';
import { StructuredTextHighlight } from '../StructuredTextHighlight';

export async function HomeHero() {
  const { homepage } = await request(HomeHeroDocument);

  if (!homepage) {
    return null;
  }

  return (
    <div className="mx-7 py-12 lg:mg-0 lg:w-[60vw] lg:max-w-[900px] lg:flex lg:items-center lg:justify-items-center lg:p-32">
      <div>
        <div className="uppercase text-stone-600 tracking-widest text-sm mb-12 lg:mb-20">
          {homepage.title}
        </div>
        <h1 className="font-serif mb-12 text-5xl lg:text-8xl">
          <StructuredTextHighlight
            data={homepage.tagline.value as StructuredTextDocument}
          />
        </h1>
        <div className="text-stone-600 leading-loose">
          <StructuredText
            data={homepage.description.value as StructuredTextDocument}
          />
        </div>
      </div>
    </div>
  );
}
