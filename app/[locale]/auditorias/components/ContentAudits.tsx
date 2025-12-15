"use client";

import Link from "next/link";
import { ReactNode, use, useState, useTransition } from "react";
import { useTranslations } from "next-intl";


type SidebarLink = {
  name: string;
  href: string;
  content: string;
  id: string;
};

type MainContentProp = {
  title?: string;
  content?: string;
};


const StandardButton = ({children}: {children: ReactNode}) => (
  <button
    type="button"
    className={`px-4 py-1 text-md  h-10 font-bold t text-white 
     border-gray-300 text-gray-700 hover:bg-[#39566d] bg-[#304658] cursor-pointer 
    `}
    onClick={() => window.open("https://legalauditex.ar/", "_blank")}
  >
    {children}
  </button>
);


const MainContent = ({ title, content }: MainContentProp) => (
  <div className="prose max-w-none">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
   <StandardButton >{content}</StandardButton>
  </div>
);

export default function ContentAreasPracticas() {
  const t = useTranslations("AuditPage");
  const areasDePracticaLinks: SidebarLink[] = [
    {
      id: "derecho-laboral",
      name: t("title"),
      href: "/derecho-laboral",
      content: t("accessTheSystem"),
    },
  ];

  const [content, setContent] = useState<SidebarLink | null>(
    areasDePracticaLinks[0]
  );
  type ClickHandler = (
    id: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => void;

  const handlerClick: ClickHandler = (id, event) => {
    event.preventDefault();
    const selectedLink = areasDePracticaLinks.find((link) => link.id === id);
    setContent(selectedLink || null);
  };

  return (
    <div className="flex flex-col lg:flex-row ">
      {/* Columna de la Barra Lateral (Sidebar) */}
      <aside className="w-full lg:w-1/3"></aside>
      {/* Columna del Contenido Central */}
      <section className="w-full lg:w-3/4">
        <MainContent title={content?.name} content={content?.content} />
      </section>
    </div>
  );
}
