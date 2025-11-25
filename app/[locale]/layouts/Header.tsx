"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Necesitarás instalar @heroicons/react

import { useState, ReactNode } from "react";
import LangSocial from "../ui/LangSocial";
import MainNavBar from "../ui/MainNavBar";
import { useTranslations, useLocale } from "next-intl";

// Interfaces
interface NavLinkProps {
  href: string;
  children: ReactNode;
}

interface NavItem {
  name: string;
  href: string;
  id: string;
}

// Componente de Enlace del Menú (para reutilizar)
const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    className="px-4 py-2 text-white hover:underline hover:text-black transition duration-300 ease-in-out font-medium "
  >
    {children}
  </Link>
);

export default function Header() {
  const t = useTranslations("HeaderComponet");
  const pathname = usePathname();
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Define los enlaces del submenú gris/azul
  const subNavItems: NavItem[] = [
    {
      name: t("navBarSubMenu.areasPracticas"),
      href: `/${locale}/areas-practicas`,
      id: "1",
    },
    { name: "|", href: "#", id: "2" },
    {
      name: t("navBarSubMenu.seminariosCapacitacion"),
      href: `/${locale}/seminarios-capacitacion`,
      id: "3",
    },
    { name: "|", href: "#", id: "4" },
    {
      name: t("navBarSubMenu.corresponsales"),
      href: `/${locale}/corresponsales`,
      id: "5",
    },
    { name: "|", href: "#", id: "6" },
    { name: t("navBarSubMenu.clientes"), href: `/${locale}/clientes`, id: "7" },
    { name: "|", href: "#", id: "8" },
    { name: t("navBarSubMenu.equipo"), href: `/${locale}/equipo`, id: "9" },
  ];

  // Dentro del componente Header (antes del return)
  const stripLocale = (p?: string | null) => {
    if (!p) return "/";
    const match = p.match(/^\/(es|en|pt)(\/.*)?$/);
    return match ? match[2] ?? "/" : p;
  };
  return (
    <header className="w-full">
      {/* Barra Superior - Logo, Idiomas y Redes */}
      <div className="grid grid-cols-1 sm:grid-cols-2  ">
        <div className="flex justify-center sm:justify-start space-x-2  min-h-[60px] ">
          <Image
            src="/images/logo_hfc.png"
            height={200}
            width={200}
            alt=""
            style={{ position: "relative", top: -10 }}
          />
        </div>
        <div className="flex flex-col justify-center sm:justify-center items-center sm:items-end  ">
          <LangSocial />
          <MainNavBar />
        </div>
      </div>

      {/* Submenú Gris/Azul - Escritorio */}
      <div
        className="hidden lg:block bg-[#1C2C39] text-white shadow-lg mt-8"
        style={{
          borderBottom: "5px solid #E3BE58",
          borderImage: "linear-gradient(90deg, #E3BE58, #FFE8AA, #E3BE58) 1",
        }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-12">
          {subNavItems.map((item, index) =>
            item.name === "|" ? (
              <span key={item.id} style={{ color: "#5A809E" }}>
                |
              </span>
            ) : (
              <div key={item.id + `_desktop`}>
                <Link
                  href={item.href}
                  style={{ fontWeight: "400", letterSpacing: 0 }}
                  className={`px-4 py-3 text-lg hover:underline  tracking-wider transform hover:scale-[1.05] hover:text-[#FFE8AA] transition duration-150  ease-in-out ${
                    stripLocale(pathname) === item.href
                      ? "underline text-[#FFE8AA]"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            )
          )}
        </div>
      </div>

      {/* Botón de Menú Móvil */}
      <div className="container mx-auto   flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded absolute top-4 right-4"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Submenú Gris/Azul - Menú Móvil Desplegable */}
      <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
        <div
          className={`h-screen  bg-[#1c2c39]  transition-property duration-300 ease-in-out`}
          style={{
            position: "absolute",
            height: "100%",
            top: "0",
            left: isOpen ? 0 : "-80%",
            zIndex: 10,
            width: "80%",
            borderRight: "5px solid #E3BE58",
            borderImage: "linear-gradient(0deg, #E3BE58, #FFE8AA, #E3BE58) 1",
          }}
        >
          <ul style={{ marginTop: "30px" }}>
            {isOpen &&
              subNavItems.map((item, index) =>
                item.name === "|" ? (
                  <></>
                ) : (
                  <li key={item.id + `_movil`}>
                    <NavLink href={item.href}>{item.name}</NavLink>
                    {index < subNavItems.length - 1 && (
                      <div
                        style={{
                          height: "1px",
                          backgroundColor: "#5A809E ",
                          margin: "15px 18px",
                        }}
                      ></div>
                    )}
                  </li>
                )
              )}
          </ul>
        </div>
        {isOpen && (
          <div
            className="h-screen w-full bg-black block opacity-50 "
            style={{
              position: "absolute",
              height: "100%",
              top: "0",
              left: "0",
              zIndex: 9,
            }}
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
}
