import { FooterLinks } from '../molecules/FooterLinks';
import bg from '../../public/background.webp';
import { FooterContact } from '../molecules/FooterContact';
import ImageBase from '../atoms/ImageBase';
import Container from '../layout/Container';
import { FooterData } from '@/types/footer.interface';
import { getContactFallbackIcon } from '@/util/iconFallBack';
import RichText from '../atoms/RichText';
type FooterProps = {
  data: FooterData;
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  const { logo, description, columns, copyrightText } = data;
  return (
    <footer
      className="relative text-white bg-top  bg-cover"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none brightness-[58%] contrast-[119%] saturate-[65%] blur-none hue-rotate-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(4,35,14,0.95) 0%, rgba(12,68,28,0.85) 40%, rgba(22,92,40,0.75) 70%, rgba(30,105,46,0.7) 100%)',
        }}
      />

      <Container className=" py-16 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          {logo?.url && (
            <div className="flex justify-start mb-4">
              <ImageBase
                src={logo.url}
                alt={logo.alternativeText || 'Footer Logo'}
                className="lg:h-30.25 lg:w-30.25 h-24 w-24 object-contain"
                height={30.25}
                width={30.25}
              />
            </div>
          )}
          {description && (
            <p className="text-[15px] leading-6 max-w-[260px] font-manrope font-medium">
              {description}
            </p>
          )}
        </div>
        {columns.map((column, index) => {
          if (column.__typename === 'ComponentVandanFoodFooterSection') {
            return (
              <FooterLinks
                key={index}
                title={column.title}
                items={column.links.map((link) => ({
                  id: link.id,
                  label: link.text,
                  url: link.href || `/${link.text.toLowerCase().replace(/\s+/g, '-')}`,
                  icon: link.icon,
                }))}
              />
            );
          }

          if (column.__typename === 'ComponentVandanFoodContactSection') {
            return (
              <FooterContact
                key={column.id}
                title={column.title}
                items={column.items.map((item) => ({
                  id: item.content,
                  label: item.content,
                  value: item.link || undefined,
                  isLink: !!item.link,
                  icon: item.icon?.url
                    ? {
                        url: item.icon.url,
                        alternativeText: item.icon.alternativeText,
                      }
                    : getContactFallbackIcon(item.content),
                }))}
              />
            );
          }

          return null;
        })}
      </Container>

      <div className="relative w-full bg-[#1f4f3b] text-center py-4">
        <div className="[&_p]:text-[14px] [&_p]:font-manrope [&_p]:font-medium [&_span]:text-light-green [&_a]:text-light-green [&_a]:no-underline">
          <RichText content={copyrightText || ''} />
        </div>
      </div>
    </footer>
  );
};
