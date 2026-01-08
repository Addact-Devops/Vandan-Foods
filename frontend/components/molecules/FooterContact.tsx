import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import ImageBase from '../atoms/ImageBase';
import { Fragment } from 'react';

export type MediaIcon = {
  url: string;
  alternativeText?: string;
};

export type ContactItem = {
  id: string;
  label: string;
  value?: string;
  isLink?: boolean;

  icon: IconDefinition | MediaIcon;
};

type FooterContactProps = {
  title: string;
  items: ContactItem[];
};

const isMediaIcon = (icon: IconDefinition | MediaIcon): icon is MediaIcon => {
  return typeof icon === 'object' && 'url' in icon;
};

export const FooterContact = ({ title, items }: FooterContactProps) => {
  return (
    <Fragment>
      <div className="flex flex-col gap-3">
        <h3 className="text-white text-[20px] font-manrope font-extrabold">{title}</h3>

        <ul>
          {items.map((i) => (
            <li key={i.id} className="list-none w-full pb-[10px]">
              {i.isLink ? (
                <Link href={i.value!} className="flex items-start w-full gap-2">
                  {isMediaIcon(i.icon) ? (
                    <ImageBase
                      src={i.icon.url}
                      alt={i.icon.alternativeText || ''}
                      width={16}
                      height={16}
                    />
                  ) : (
                    <FontAwesomeIcon icon={i.icon} className="!w-[10%] h-4 mt-[2px]" />
                  )}

                  <span
                    className="
                      font-manrope
                      text-[15px]
                      font-medium
                      leading-6
                      self-center
                      ps-[5px]
                      w-3/4
                    "
                  >
                    {i.label}
                  </span>
                </Link>
              ) : (
                <div className="flex items-start w-full gap-2">
                  {isMediaIcon(i.icon) ? (
                    <ImageBase
                      src={i.icon.url}
                      alt={i.icon.alternativeText || ''}
                      width={16}
                      height={16}
                    />
                  ) : (
                    <FontAwesomeIcon icon={i.icon} className="!w-[10%] h-4 mt-[2px]" />
                  )}
                  <span
                    className="
                      font-manrope
                      text-[15px]
                      font-medium
                      leading-6
                      self-center
                      ps-[5px]
                      w-3/4
                    "
                  >
                    {i.label}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
