import ContentRender from '@/components/organisms/ContentRender';
import HeroBanner from '@/components/organisms/HeroBanner';
import Container from '@/components/layout/Container';
import { ourBoardOfDirectorQuery } from '@/graphql/queries/ourBoardOfDirector';

const OurBoardOfDirector = async () => {
  const [ourBoardOfDirectoryData] = await Promise.all([ourBoardOfDirectorQuery()]);

  const heroBannerData = ourBoardOfDirectoryData?.ourBoardOfDirector?.banner?.banner;

  console.log(ourBoardOfDirectoryData?.ourBoardOfDirector?.headLine);
  return (
    <div>
      <HeroBanner heroBannerData={heroBannerData} />
      <Container className="px-10 ">
        <ContentRender
          h2={ourBoardOfDirectoryData?.ourBoardOfDirector?.headLine?.title}
          richText={ourBoardOfDirectoryData?.ourBoardOfDirector?.headLine?.description}
        />
      </Container>
    </div>
  );
};

export default OurBoardOfDirector;
