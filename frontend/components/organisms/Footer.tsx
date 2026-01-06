import { FooterLinks } from '../molecules/FooterLinks';
import logo from '../../public/logo.webp';
import bg from '../../public/background.webp';
import {
  faEnvelope,
  faLocationDot,
  faMobileScreenButton,
  faPhone,
  faUser,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
import { FooterContact } from '../molecules/FooterContact';
import ImageBase from '../atoms/ImageBase';
import Container from '../layout/Container';

export const Footer = () => {
  const footerConfig = {
    linkGroups: [
      {
        id: 'links',
        title: 'Links',
        items: [
          { id: 'home', label: 'Home', url: '/' },
          { id: 'about', label: 'About Us', url: '/about' },
          { id: 'investors', label: 'Investors', url: '/investors' },
          { id: 'strategy', label: 'Our Business Strategy', url: '/our-business-strategy' },
          { id: 'board', label: 'Our Board of Director', url: '/our-board-of-director' },
          { id: 'contact', label: 'Contact Us', url: '/contact-us' },
        ],
      },
      {
        id: 'products',
        title: 'Products',
        items: [
          { id: 'cake', label: 'Castor De Oiled Cake', url: '/products/cake' },
          { id: 'meal', label: 'High Protein Castor Meal', url: '/products/meal' },
          {
            id: 'oil',
            label: 'Refined Castor Oil First Stage Grade (F.S.G)',
            url: '/products/oil',
          },
        ],
      },
    ],

    contact: {
      title: 'Contact Us',
      items: [
        {
          id: 'person',
          icon: faUser,
          label: 'Patel Jitendra Rameshbhai',
        },
        {
          id: 'phone1',
          icon: faPhone,
          label: '+91 8980121363',
          value: 'tel:+918980121363',
          isLink: true,
        },
        {
          id: 'phone2',
          icon: faMobileScreenButton,
          label: '+91 7946041548',
          value: 'tel:+917946041548',
          isLink: true,
        },
        {
          id: 'email',
          icon: faEnvelope,
          label: 'vandanfoodsltd@gmail.com',
          value: 'mailto:vandanfoodsltd@gmail.com',
          isLink: true,
        },
        {
          id: 'office',
          icon: faLocationDot,
          label:
            'Registered Address: 503/B, Wall Street-1, Opp. Orient Club, Nr. Rly. Crossing, Ellisbridge, Ahmedabad – 380006.',
        },
        {
          id: 'plant',
          icon: faWarehouse,
          label:
            'Plant Address: Survey No 2554/2, Motap Dhinoj Road, Near Sitapur Village, Dhinoj Patan – 384 225.',
        },
      ],
    },
  };

  const { contact } = footerConfig;
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

      <Container className=" py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          <div className="flex justify-start mb-4">
            <ImageBase src={logo} alt="" className="h-30.25 w-30.25 object-contain" />
          </div>
          <p className=" text-[15px] leading-6 max-w-[260px] font-manrope font-medium">
            Our company is an ISO 9001:2015 standards certified company.We focus on delivering
            high-quality Castor Oil,Castor Cake that meet international standards and customer
            requirements.
          </p>
        </div>
        {footerConfig.linkGroups.map((i) => (
          <FooterLinks items={i.items} key={i.id} title={i.title} />
        ))}
        <FooterContact title={contact.title} items={contact.items} />
      </Container>

      <div className="relative w-full bg-[#1f4f3b] text-center py-4">
        <p className="text-[14px] font-manrope font-medium">
          Copyright © {new Date().getFullYear()}{' '}
          <span className="text-light-green">Vandan foods</span>. Created by –
          <a href="https://paritechnology.com" target="_blank" className="text-light-green  ps-1">
            Pari Technology
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
