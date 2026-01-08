import HeroBanner from '@/components/organisms/HeroBanner';
import { qualityCertificationQuery } from '@/graphql/queries/qualityCertification';

export default async function QualityCertificationPage() {
  const { qualityCertification } = await qualityCertificationQuery();

  const banner = qualityCertification?.banner?.banner;

  return (
    <>
      <HeroBanner
        heroBannerData={banner}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about', isCurrent: true },
        ]}
      />
    </>
  );
}
