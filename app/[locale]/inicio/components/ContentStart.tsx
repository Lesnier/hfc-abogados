"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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

const MainContent = ({ title, content }: MainContentProp) => (
  <div className="prose max-w-none">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p>{content}</p>
  </div>
);

export default function ContentStart() {
  const t = useTranslations("HomePage");
  const areasDePracticaLinks: SidebarLink[] = [
    {
      id: "inicio",
      name: t("title"),
      href: "/inicio",
      content: t("welcomeMessage"),
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
