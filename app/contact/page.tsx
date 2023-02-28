import { DatoImage } from '@/components/DatoImage';
import { AboutDocument } from '@/graphql/generated';
import { request } from '@/lib/dato';
import { Metadata } from 'next';
import { renderMetaTags } from 'react-datocms/seo';
import {
  StructuredText,
  StructuredTextDocument,
} from 'react-datocms/structured-text';

export default async function Home() {
  const { about } = await request(AboutDocument);

  if (!about) {
    return null;
  }

  return (
    <main>
      {renderMetaTags(about._seoMetaTags)}
      <div className="mx-7 py-12 max-w-[700px] xl:m-0 xl:w-[50vw] xl:max-w-[1100px] xl:p-32 overflow-auto xl:box-border">
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
          <DatoImage data={about.signature.responsiveImage} />
        </div>
      </div>
      <div className="hidden xl:block xl:fixed xl:inset-0 xl:left-auto xl:w-[50vw]">
        <DatoImage
          layout="fill"
          data={about.image.responsiveImage}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </div>
      <div className="xl:hidden">
        <DatoImage layout="responsive" data={about.image.responsiveImage} />
      </div>
    </main>
  );
}
