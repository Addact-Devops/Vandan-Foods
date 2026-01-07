'use client';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import logo from '../../public/logo.webp';
import ImageBase from '../atoms/ImageBase';
import Container from '../layout/Container';

export const Header = () => {
  const res = {
    header: {
      topbar: {
        contacts: [
          {
            id: 'phone',
            type: 'phone',
            label: '+91 8980121363',
            value: 'tel:+91 8980121363',
            icon: faPhone,
          },
          {
            id: 'email',
            type: 'email',
            label: 'Vandanfoodsltd@gmail.com',
            value: 'mailto:Vandanfoodsltd@gmail.com',
            icon: faEnvelope,
          },
        ],
        socials: [
          { id: 'facebook', url: '#', icon: faFacebookF },
          { id: 'instagram', url: '#', icon: faInstagram },
          { id: 'linkedin', url: '#', icon: faLinkedinIn },
          { id: 'youtube', url: '#', icon: faYoutube },
        ],
      },
      menus: [
        {
          id: 'home',
          label: 'HOME',
          url: '/',
        },
        {
          id: 'about',
          label: 'ABOUT US',
          url: '/about',
          subMenus: [
            {
              id: 'about-company',
              label: 'ABOUT COMPANY',
              url: '/about/about-company',
            },
            {
              id: 'management',
              label: 'MANAGEMENT',
              url: '/about/management',
            },
            {
              id: 'ingredients',
              label: 'INGREDIENTS',
              url: '/about/real-ingredients',
            },
            {
              id: 'marketing',
              label: 'MARKETING',
              url: '/about/marketing',
            },
            {
              id: 'quality-certification',
              label: 'QUALITY-CERTIFICATION',
              url: '/about/quality-certification',
            },
          ],
        },
        {
          id: 'manufacturing',
          label: 'MANUFACTURING',
          url: '/manufacturing',
          subMenus: [
            {
              id: 'castor-oil',
              label: 'CASTOR DE OILED CAKE',
              url: '/manufacturing/castor-oil',
            },
            {
              id: 'refined-oil',
              label: 'REFINED CASTOR OIL FIRST STAGE GRADE',
              url: '/manufacturing/refined-oil',
            },
          ],
        },

        {
          id: 'investors',
          label: 'INVESTORS',
          url: '/investors',
        },
        {
          id: 'our-business-strategy',
          label: 'OUR BUSINESS STRATEGY',
          url: '/our-business-strategy',
        },
        {
          id: 'our-board-of-director',
          label: 'OUR BOARD OF DIRECTOR',
          url: '/our-board-of-director',
        },
        {
          id: 'contact-us',
          label: 'CONTACT US',
          url: '/contact-us',
        },
      ],
    },
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const { contacts, socials } = res.header.topbar;

  const pathname = usePathname();
  const menu = res.header.menus;

  return (
    <header className="w-full">
      <div className=" w-full hidden md:flex text-white text-sm font-manrope">
        <div className="w-full lg:w-4/5 bg-primary flex justify-between lg:justify-normal items-center gap-6  h-14 p-10 lg:pl-10 lg:pr-0 py-5 text-base font-semibold">
          {contacts.map((item) => (
            <span key={item.id} className="flex items-center gap-4">
              <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
              <a href={item.value}> {item.label}</a>
            </span>
          ))}
        </div>

        <div className="w-1/5 bg-secondary hidden lg:flex items-center justify-center gap-4 h-14 py-5 text-[15px] font-semibold text-white">
          {socials.map((item) => (
            <a key={item.id} href={item.url} className="hover:text-primary">
              <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <Container className="bg-white">
        <div className=" mx-auto flex items-center justify-between px-0  lg:h-30.5 h-17.5">
          <div className="lg:w-30.5 w-16 flex items-center justify-center gap-7 lg:pl-0 pl-4">
            <ImageBase src={logo} alt="" className="h-[121px] w-[121px] object-contain" />
          </div>

          <nav className="w-4/5 hidden lg:flex items-center flex-wrap justify-start gap-y-5 2xl:gap-y-0 2xl:justify-center font-manrope text-[14px] text-black py-[10px]">
            {menu.map((menus) => {
              const isActive = pathname === menus.url || pathname.startsWith(menus.url + '/');
              const hasSubMenu = Array.isArray(menus.subMenus);
              return (
                <div key={menus.id} className="relative group flex items-center">
                  <Link
                    className={`px-4 flex items-center gap-2 group font-extrabold ${isActive ? 'text-primary' : 'text-[#232323] hover:text-primary'}`}
                    href={menus.url}
                  >
                    {menus.label}

                    {hasSubMenu && (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`
                w-3 h-3 transition
                ${isActive ? 'text-primary' : 'text-dark-gray group-hover:text-primary'}
              `}
                      />
                    )}
                  </Link>

                  {hasSubMenu && (
                    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md rounded-sm min-w-[220px] z-20">
                      {menus?.subMenus?.map((sub) => {
                        const subActive = pathname === sub.url;
                        return (
                          <Link
                            href={sub.url}
                            key={sub.id}
                            className={`
                     block px-4
        py-[15px]                
        font-roboto               
             
        leading-[27px]           
        border-b                
        text-[14px]
        font-extrabold
                    ${subActive ? 'text-primary' : 'text-[#232323] hover:text-primary'}
                  `}
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          <button
            className="flex lg:hidden ml-auto mr-4 "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-primary" />
          </button>

          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 ">
              <div className="absolute right-0 top-0 h-full w-full bg-white shadow-xl box-border p-8 overflow-y-hidden overflow-x-hidden leading-[1.4em] flex flex-col">
                <div className="flex items-center justify-end absolute right-7 top-3">
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <FontAwesomeIcon icon={faXmark} className="w-5 h-5 text-lg text-dark-gray" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-hidden font-manrope">
                  {menu.map((m) => {
                    const hasSubMenu = Array.isArray(m.subMenus);
                    const isOpen = openSubMenu === m.id;
                    const isActive = pathname === m.url || pathname.startsWith(m.url + '/');

                    return (
                      <div key={m.id} className="p">
                        <button
                          className={`
                  w-full flex items-center justify-between
                  px-5 py-3 text-[14px] font-extrabold
                  ${isActive ? 'text-primary' : 'text-[#232323]'}
                `}
                          onClick={() =>
                            hasSubMenu
                              ? setOpenSubMenu(isOpen ? null : m.id)
                              : setIsMobileMenuOpen(false)
                          }
                        >
                          <Link href={m.url}>{m.label}</Link>

                          {hasSubMenu && (
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className={`w-3 h-3 transition
                      ${isOpen && 'rotate-180 text-primary'}
                    `}
                            />
                          )}
                        </button>

                        {hasSubMenu && isOpen && (
                          <div className="bg-white">
                            {m?.subMenus?.map((sub) => (
                              <Link
                                key={sub.id}
                                href={sub.url}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-8 py-3 text-[14px] font-medium border-b hover:text-primary"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};
