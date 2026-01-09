import { BreadCrumbProps } from '@/types/common.interface';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const BreadCrumb = ({ crumbs, className }: BreadCrumbProps) => {
  if (!crumbs || crumbs.length === 0) return null;
  return (
    <div className={`text-sm mb-3 font-manrope ${className || ''}`}>
      {crumbs?.map((item, index) => {
        const isLast = index === crumbs.length - 1;
        const isCurrent = item.isCurrent || isLast;

        return (
          <span key={index} className="inline-flex items-center">
            {isCurrent ? (
              <span className="text-lg text-white cursor-default">{item.label}</span>
            ) : (
              <Link href={item.href || '#'} className="text-lg hover:opacity-80">
                {item.label}
              </Link>
            )}

            {!isLast && (
              <span className="mx-2">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
