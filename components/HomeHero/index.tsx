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
    <div className="w-[60vw] max-w-[900px] flex items-center justify-items-center p-32">
      <div>
        <div className="mb-20 uppercase text-stone-600 tracking-widest text-sm">
          {homepage.title}
        </div>
        <h1 className="font-serif text-8xl mb-12">
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
