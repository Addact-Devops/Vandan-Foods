import { ImageBaseProps } from '@/types/common.interface';
import Image, { StaticImageData } from 'next/image';

const ImageBase = ({
  src,
  alt = '',
  className = '',
  fill = false,
  priority = false,
  width,
  height,
}: ImageBaseProps) => {
  let resolvedSrc: string | StaticImageData = src;

  if (typeof src === 'string' && !src.startsWith('http')) {
    resolvedSrc = `${process.env.NEXT_PUBLIC_MEDIA_URL}${src}`;
  }

  return (
    <div className={fill ? 'relative w-full h-full' : ''}>
      <Image
        src={resolvedSrc}
        alt={alt}
        fill={fill}
        priority={priority}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={className}
      />
    </div>
  );
};

export default ImageBase;
