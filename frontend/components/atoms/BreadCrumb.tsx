import { BreadCrumbProps } from '@/types/common.interface';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const BreadCrumb = ({ crumbs, className }: BreadCrumbProps) => {
  if (!crumbs || crumbs.length === 0) return null;
  return (
    <div className={`text-sm mb-3 font-manrope ${className || ''}`}>
      {crumbs?.map((item, index) => (
        <span key={index}>
          <Link className="hover:opacity-80 text-lg" href={item.href || '#'}>
            {item.label}
          </Link>
          {index < crumbs.length - 1 && (
            <span className="mx-2">
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
