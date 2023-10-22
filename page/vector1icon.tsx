import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 45 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.2177 29.4463C2.88371 20.4287 -0.825823 9.43535 0.168904 0.482804C0.344714 -1.09949 3.14584 1.64629 4.52432 2.44274C10.3008 5.78026 16.3559 8.66287 22.7082 10.718C28.4016 12.56 36.5539 17.361 42.4165 17.6867C53.3043 18.2916 23.9346 24.05 20.4216 25.0909C14.3575 26.8877 8.97742 25.7066 5.17764 31.4063'
      stroke='#B0B0B1'
      strokeWidth={3}
      strokeLinecap='round'
    />
  </svg>
);
const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
