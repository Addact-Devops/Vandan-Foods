'use client';

import { faBars, faEnvelope, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from '../../public/logo.webp';
import ImageBase from '../atoms/ImageBase';
import Container from '../layout/Container';
import { HeaderData } from '@/types/header.interface';
import { getSocialFallbackIcon } from '@/util/iconFallBack';

type HeaderProps = {
  data: HeaderData;
};

export const Header = ({ data }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const pathname = usePathname();
  const { logo, topBar, mainMenu } = data;

  return (
    <header className="w-full">
      <div className=" w-full hidden md:flex text-white text-sm font-manrope">
        <div className="w-full lg:w-4/5 bg-primary flex justify-between lg:justify-normal items-center gap-6  h-14 p-10 lg:pl-10 lg:pr-0 py-5 text-base font-semibold">
          <span className="flex items-center gap-4">
            {topBar?.phoneIcon?.url ? (
              <ImageBase src={topBar.phoneIcon.url} alt="Phone" width={16} height={16} />
            ) : (
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
            )}

            {topBar?.phoneNumber && <a href={`tel:${topBar.phoneNumber}`}>{topBar.phoneNumber}</a>}
          </span>

          <span className="flex items-center gap-4">
            {topBar?.emailIcon?.url ? (
              <ImageBase src={topBar.emailIcon.url} alt="Email" width={16} height={16} />
            ) : (
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
            )}

            {topBar?.email && <a href={`mailto:${topBar.email}`}>{topBar.email}</a>}
          </span>
        </div>

        <div className="w-1/5 bg-secondary hidden lg:flex items-center justify-center gap-4 h-14 py-5 text-[15px] font-semibold text-white">
          {topBar.socialLinks.map((item) => {
            const hasBackendIcon = !!item.icon?.url;

            return (
              <a
                key={item.label}
                href={item.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {hasBackendIcon ? (
                  <ImageBase src={item.icon.url} alt={item.label} width={20} height={20} />
                ) : (
                  <FontAwesomeIcon icon={getSocialFallbackIcon(item.label)} className="w-5 h-5" />
                )}
              </a>
            );
          })}
        </div>
      </div>

      <Container className="bg-white">
        <div className=" mx-auto flex items-center justify-between px-0  lg:h-30.5 h-17.5">
          <div className="lg:w-30.5 w-16 flex items-center justify-center gap-7 lg:pl-0 pl-4">
            <ImageBase
              src={logo.url || Logo}
              alt={logo.alternativeText || 'Logo'}
              className="h-[121px] w-[121px] object-contain"
              height={30.25}
              width={30.25}
            />
          </div>

          <nav className="w-4/5 hidden lg:flex items-center flex-wrap justify-start gap-y-5 2xl:gap-y-0 2xl:justify-center font-manrope text-[14px] text-black py-[10px]">
            {mainMenu.map((menus) => {
              const isActive = pathname === menus.href || pathname.startsWith(menus.href + '/');
              const hasSubMenu = menus.subMenu && menus.subMenu.length > 0;

              return (
                <div key={menus.id} className="relative group flex items-center">
                  <Link
                    className={`px-4 flex items-center gap-2 group font-extrabold ${isActive ? 'text-primary' : 'text-dark-gray hover:text-primary'}`}
                    href={menus.href || '#'}
                  >
                    {menus.text}

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
                      {menus?.subMenu?.map((sub) => {
                        const subActive = pathname === sub.href;
                        return (
                          <Link
                            href={sub.href}
                            key={sub.id}
                            className={`
                     block px-4
        py-[15px]                
        font-roboto               
             
        leading-[27px]           
        border-b                
        text-[14px]
        font-extrabold
                    ${subActive ? 'text-primary' : 'text-dark-gray hover:text-primary'}
                  `}
                          >
                            {sub.text}
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
            <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-dark-gray" />
          </button>

          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 ">
              <div className="absolute right-0 top-0 h-full w-full bg-white shadow-xl box-border p-8 overflow-y-hidden overflow-x-hidden leading-[1.4em] flex flex-col">
                <div className="flex items-center justify-end absolute right-7 top-3 ">
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <FontAwesomeIcon icon={faXmark} className="w-5 h-5 text-lg text-dark-gray" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-hidden font-manrope">
                  {mainMenu.map((m) => {
                    const hasSubMenu = Array.isArray(m.subMenu);
                    const isOpen = openSubMenu === m.id;
                    const isActive = pathname === m.href || pathname.startsWith(m.href + '/');

                    return (
                      <div key={m.id} className="p">
                        <button
                          className={`
                  w-full flex items-center justify-between
                  px-5 py-3 text-[14px] font-extrabold
                  ${isActive ? 'text-primary' : 'text-dark-gray'}
                `}
                          onClick={() =>
                            hasSubMenu
                              ? setOpenSubMenu(isOpen ? null : m.id)
                              : setIsMobileMenuOpen(false)
                          }
                        >
                          <Link href={m.href}>{m.text}</Link>

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
                            {m?.subMenu?.map((sub) => (
                              <Link
                                key={sub.id}
                                href={sub.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-8 py-3 text-[14px] font-medium border-b hover:text-primary"
                              >
                                {sub.text}
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
