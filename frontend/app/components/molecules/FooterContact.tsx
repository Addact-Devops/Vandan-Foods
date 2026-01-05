import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Fragment } from 'react/jsx-runtime';

export type ContactItem = {
  id: string;
  icon: IconDefinition;
  label: string;
  value?: string;
  isLink?: boolean;
};

type FooterContactProps = {
  title: string;
  items: ContactItem[];
};

export const FooterContact = ({ title, items }: FooterContactProps) => {
  return (
    <Fragment>
      <div className="flex flex-col gap-3">
        <h3 className="text-white text-[20px] font-manrope text-lg font-extrabold">{title}</h3>

        <ul>
          {items.map((i) => (
            <li key={i.id} className="list-none w-full pb-[10px]">
              {i.isLink ? (
                <Link href={i.value!} className="flex items-start w-full gap-2">
                  <FontAwesomeIcon icon={i.icon} className="!w-[10%] h-4  mt-[2px]" />
                  <span
                    className=" font-manrope
                    text-[15px]
                    font-medium
                    leading-6
                    self-center
                    ps-[5px] w-3/4 "
                  >
                    {i.label}
                  </span>
                </Link>
              ) : (
                <div className="flex items-start w-full gap-2">
                  <FontAwesomeIcon icon={i.icon} className="!w-[10%] h-4  mt-[2px]" />
                  <span
                    className=" font-manrope
                    text-[15px]
                    font-medium
                    leading-6
                    self-center
                    ps-[5px] no-underline w-3/4"
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
