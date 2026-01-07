import { ContentRenderProps } from '@/types/common.interface';
import RichText from '../atoms/RichText';
import { Fragment } from 'react/jsx-runtime';

const ContentRender = ({ typeOfHeading, headlineArrData }: ContentRenderProps) => {
  return (
    <section className="w-full py-5 lg:py-12 max-w-315 mx-auto">
      {headlineArrData &&
        headlineArrData.map((headlineData, index) => {
          const { id, title, description } = headlineData;
          return (
            <Fragment key={id || index}>
              <div className="max-w-[900px] mx-auto">
                {(typeOfHeading === 'h1' || typeOfHeading === 'h2') && (
                  <div className="mb-8">
                    {typeOfHeading === 'h1' && (
                      <h1 className="lg:text-[34px] text-[25px] font-semibold font-manrope text-[#222] text-center ">
                        {title}
                      </h1>
                    )}

                    {typeOfHeading === 'h2' && (
                      <h2 className="text-2xl font-semibold text-[#222] font-jost">{title}</h2>
                    )}
                  </div>
                )}

                {description && (
                  <div className="leading-[28px] text-justify font-sans-serif [&_ol]:text-medium-gray [&_li]:mb-8 [&_li]:text-[18px] [&_li]:font-jost [&_p]:mb-8 [&_p]:text-[18px] [&_p]:font-jost [&_p]:text-medium-gray">
                    <RichText content={description} />
                  </div>
                )}
              </div>
            </Fragment>
          );
        })}
    </section>
  );
};

export default ContentRender;
