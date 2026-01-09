import ContentRender from '@/components/organisms/ContentRender';
import HeroBanner from '@/components/organisms/HeroBanner';
import Container from '@/components/layout/Container';
import { ourBoardOfDirectorQuery } from '@/graphql/queries/ourBoardOfDirector';
import { toHeadlineArray } from '@/util/mapper/headlineMapper';

const OurBoardOfDirector = async () => {
  const [ourBoardOfDirectoryData] = await Promise.all([ourBoardOfDirectorQuery()]);

  const heroBannerData = ourBoardOfDirectoryData?.ourBoardOfDirector?.banner?.banner;

  const headlineArrData = toHeadlineArray(ourBoardOfDirectoryData?.ourBoardOfDirector?.headLine);

  return (
    <div>
      <HeroBanner
        heroBannerData={heroBannerData}
        crumbs={[
          { label: 'Home', href: '/', isCurrent: false },
          { label: 'Our-Board-Of-Director', href: '', isCurrent: true },
        ]}
      />
      <Container className="px-10 ">
        <ContentRender headlineArrData={headlineArrData} typeOfHeading={'h1'} />
      </Container>
    </div>
  );
};

export default OurBoardOfDirector;
