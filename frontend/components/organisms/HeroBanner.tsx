import { HeroBannerProps } from '@/types/common.interface';
import BreadCrumb from '../atoms/BreadCrumb';
import ImageBase from '../atoms/ImageBase';

const HeroBanner = ({ heroBannerData }: HeroBannerProps) => {
  const imageUrl = heroBannerData?.bannerImage?.url;
  return (
    <section className="relative w-full h-56 lg:h-90 md:h-105 overflow-hidden mb-6">
      <ImageBase
        src={imageUrl}
        alt={heroBannerData?.bannerImage?.alternativeText || ''}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <BreadCrumb crumbs={[{ label: 'Home', href: '/' }]} className="text-white" />
        <h1
          className="text-white md:text-5xl  tracking-wide text-center text-3xl md:text-[65px]! font-normal uppercase leading-tight"
          style={{ fontFamily: 'EB Garamond, serif' }}
        >
          {heroBannerData.bannerTitle}
        </h1>
      </div>
    </section>
  );
};

export default HeroBanner;
