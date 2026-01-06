import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export type FooterLinkItem = {
  id: string;
  label: string;
  url: string;
};

type FooterLinksProps = {
  title: string;
  items: FooterLinkItem[];
};
export const FooterLinks = ({ title, items }: FooterLinksProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-white text-[20px] font-manrope text-lg font-extrabold">{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((i) => (
          <li key={i.id} className="flex items-start gap-2">
            {' '}
            <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 text-white mt-[6px]" />
            <Link
              href={i.url}
              className=" font-manrope
          text-[15px]
          font-medium
          leading-6
          self-center
          ps-[5px]
          box-border
          text-white
          "
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
