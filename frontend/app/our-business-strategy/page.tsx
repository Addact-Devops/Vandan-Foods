import ContentRender from '@/components/organisms/ContentRender';
import HeroBanner from '@/components/organisms/HeroBanner';
import Container from '@/components/layout/Container';
import { ourBusinessStrategyQuery } from '@/graphql/queries/ourBusinessStrategy';
import { toHeadlineArray } from '@/util/mapper/headlineMapper';

const OurBusinessStrategy = async () => {
  const [ourBusinessStrategyData] = await Promise.all([ourBusinessStrategyQuery()]);
  const heroBannerData = ourBusinessStrategyData?.ourBusinessStrategy?.banner?.banner;
  const headlineArrData = toHeadlineArray(ourBusinessStrategyData?.ourBusinessStrategy?.headLine);

  return (
    <div>
      <HeroBanner
        heroBannerData={heroBannerData}
        crumbs={[{ label: 'Home', href: '/', isCurrent: true }]}
      />
      <Container className="px-10">
        <ContentRender headlineArrData={headlineArrData} typeOfHeading={'h2'} />
      </Container>
    </div>
  );
};

export default OurBusinessStrategy;
