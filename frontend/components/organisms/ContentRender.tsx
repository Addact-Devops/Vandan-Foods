import { ContentRenderProps } from '@/types/common.interface';
import RichText from '../atoms/RichText';

const ContentRender = ({ h1, h2, richText }: ContentRenderProps) => {
  return (
    <section className="w-full py-12">
      {/* Title Section */}
      {(h1 || h2) && (
        <div className="text-center mb-8">
          {h1 && <h1 className="text-[34px] font-semibold font-manrope text-[#222]">{h1}</h1>}

          {h2 && (
            <h2
              className="text-[30px] font-normal text-[#222]"
              style={{ fontFamily: 'Sans-serif' }}
            >
              {h2}
            </h2>
          )}
        </div>
      )}

      {/* Content Section */}
      {richText && (
        <div className="max-w-[900px] mx-auto leading-[28px] text-justify font-sans-serif [&_ol]:text-medium-gray [&_li]:mb-8 [&_li]:text-[18px] [&_li]:font-jost ">
          <RichText content={richText} />
        </div>
      )}
    </section>
  );
};

export default ContentRender;
