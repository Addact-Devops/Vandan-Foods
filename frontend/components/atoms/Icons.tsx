import { IconProps } from '@/types/common.interface';

export const CircleIcon = ({ className, ref }: IconProps) => (
  <svg className={`${className} -rotate-90 absolute `} width="48" height="48" viewBox="0 0 100 100">
    <circle
      ref={ref}
      cx="50"
      cy="50"
      r="45"
      className="
            fill-transparent
            stroke-black
            stroke-[6]
            transition-[stroke-dashoffset]
            duration-75
          "
    />
  </svg>
);
