import { ReactNode } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

interface NavItem {
  name: string;
  href: string;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    className="px-4 py-2 hover:underline hover:text-black transition duration-300 ease-in-out font-medium"
  >
    {children}
  </Link>
);

export default function MainNavBar() {
  const t = useTranslations("HeaderComponet");
  const locale = useLocale();
  // Define los enlaces del menú principal
  const navItems: NavItem[] = [
    { name: t("navBarMenu.start"), href: `/${locale}/inicio` },
    { name: t("navBarMenu.audits"), href: `/${locale}/auditorias` },
    { name: t("navBarMenu.contacts"), href: `/${locale}/contacto` },
  ];

  return (
    <nav className="flex justify-end text-md md:-me-4 me-0  ">
      {navItems.map((item) => (
        <NavLink key={item.name} href={item.href}>
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}
