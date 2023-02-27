import { HomeHero } from '@/components/HomeHero';
import { HorizontalScroller } from '@/components/HorizontalScroller';
import { Tile } from '@/components/Tile';
import { Work } from '@/components/Work';
import { HomeDocument } from '@/graphql/generated';
import { request } from '@/lib/dato';

export default async function Home() {
  const {
    works,
    meta: { count },
  } = await request(HomeDocument);

  return (
    <main style={{ counterReset: 'work-counter' }}>
      <HorizontalScroller>
        <Tile>
          {/* @ts-expect-error Server Component */}
          <HomeHero />
        </Tile>
        {works.map((work) => (
          <Tile key={work.id}>
            <Work work={work} total={count} />
          </Tile>
        ))}
      </HorizontalScroller>
    </main>
  );
}
