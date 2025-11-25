"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

type SidebarLink = {
  name: string;
  href: string;
  info: string[];
  content: string;
  id: string;
};

type MainContentProp = {
  title?: string;
  content?: string;
  info?: string[];
};

const MainContent = ({ title, content, info }: MainContentProp) => (
  <div className="prose max-w-none flex flex-col justify-end ">
    <h2 className="text-2xl font-bold mb-4 ">{title}</h2>
    {info?.map((line, index) => (
      <p key={index}>{line}</p>
    ))}
    <p>{content}</p>
  </div>
);

export default function ContentAreasPracticas() {
  const t = useTranslations("ContactPage");
  const areasDePracticaLinks: SidebarLink[] = [
    {
      id: "derecho-laboral",
      name: t("title"),
      href: "/derecho-laboral",
      info: [
        "info@hfcabogados.ar",
        "Lavalle 397 4to Piso. C1047",
        `${t("phone")}: (54 11) 5272.0540`,
        `${t("address")}`,
      ],
      content: "",
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
        <MainContent
          title={content?.name}
          content={content?.content}
          info={content?.info}
        />
      </section>
    </div>
  );
}
